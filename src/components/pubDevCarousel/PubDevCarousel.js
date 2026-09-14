import React, { useEffect, useRef, useState } from "react";
import "./PubDevCarousel.css";

const AUTOPLAY_MS = 6000;
const SWIPE_THRESHOLD_PX = 50;
// A drag shorter than this is still treated as a tap on the card.
const DRAG_START_PX = 8;
// Clicks this soon after a swipe ends are the tail of the swipe, not a tap.
const CLICK_SUPPRESS_MS = 350;

function useMediaQuery(query) {
  const supported = typeof window !== "undefined" && !!window.matchMedia;
  const [matches, setMatches] = useState(
    () => supported && window.matchMedia(query).matches
  );

  useEffect(() => {
    if (!supported) return undefined;
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    // Safari < 14 only implements the deprecated addListener API.
    if (mql.addEventListener) {
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    }
    mql.addListener(onChange);
    return () => mql.removeListener(onChange);
  }, [query, supported]);

  return matches;
}

// A mouse click also focuses the button it lands on; only keyboard focus
// should hold autoplay, or one click on an arrow would stop it for good.
function isKeyboardFocus(el) {
  try {
    return el.matches(":focus-visible");
  } catch (err) {
    return true; // Browsers without :focus-visible support.
  }
}

const pad = (n) => String(n).padStart(2, "0");

function ChevronIcon({ direction }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        d={direction === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayPauseIcon({ playing }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      {playing ? (
        <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" fill="currentColor" />
      ) : (
        <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
      )}
    </svg>
  );
}

// Sliding, auto-advancing carousel. Shows two items per view on wide screens
// and one on narrow ones, with a chip for every item so any of them is one
// click away.
export default function PubDevCarousel({
  items,
  getKey,
  getLabel,
  renderItem,
  ariaLabel,
  theme,
}) {
  const isWide = useMediaQuery("(min-width: 769px)");
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  const perView = isWide ? 2 : 1;
  const count = items.length;
  const maxIndex = Math.max(0, count - perView);

  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [pageHidden, setPageHidden] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const dragRef = useRef(null);
  const lastSwipeEndRef = useRef(0);
  const chipsRef = useRef(null);
  const chipRefs = useRef([]);

  const isDragging = dragOffset !== 0;
  const autoplayEnabled = !reducedMotion && maxIndex > 0;
  const paused = userPaused || hovered || focused || pageHidden || isDragging;

  const goTo = (i) => setIndex(Math.min(Math.max(i, 0), maxIndex));
  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));

  // Going from one to two items per view shrinks the last reachable index.
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    const onVisibility = () => setPageHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  // Keep the active chip centred in its strip without scrolling the page.
  useEffect(() => {
    const strip = chipsRef.current;
    const chip = chipRefs.current[index];
    if (!strip || !chip) return;
    const left = chip.offsetLeft - (strip.clientWidth - chip.offsetWidth) / 2;
    if (strip.scrollTo) {
      strip.scrollTo({ left, behavior: reducedMotion ? "auto" : "smooth" });
    } else {
      strip.scrollLeft = left;
    }
  }, [index, reducedMotion]);

  const isVisible = (i) => i >= index && i < index + perView;

  const onPointerDown = (e) => {
    // Mouse users have the arrows and chips; dragging with a mouse would
    // fight text selection and the copy button.
    if (e.pointerType === "mouse" || maxIndex === 0) return;
    dragRef.current = {
      id: e.pointerId,
      x: e.clientX,
      y: e.clientY,
      active: false,
    };
  };

  const onPointerMove = (e) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== e.pointerId) return;
    const dx = e.clientX - drag.x;
    const dy = e.clientY - drag.y;
    if (!drag.active) {
      if (Math.abs(dx) < DRAG_START_PX || Math.abs(dx) < Math.abs(dy)) return;
      drag.active = true;
    }
    // Resist dragging past either end.
    const atEdge = (dx > 0 && index === 0) || (dx < 0 && index === maxIndex);
    setDragOffset(atEdge ? dx / 3 : dx);
  };

  const endDrag = (e) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== e.pointerId) return;
    dragRef.current = null;
    if (!drag.active) return;
    const dx = e.clientX - drag.x;
    lastSwipeEndRef.current = Date.now();
    setDragOffset(0);
    if (dx <= -SWIPE_THRESHOLD_PX) goTo(index + 1);
    else if (dx >= SWIPE_THRESHOLD_PX) goTo(index - 1);
  };

  const cancelDrag = () => {
    dragRef.current = null;
    setDragOffset(0);
  };

  const onClickCapture = (e) => {
    if (Date.now() - lastSwipeEndRef.current < CLICK_SUPPRESS_MS) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
  };

  const onBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false);
  };

  const trackStyle = {
    transform: `translate3d(calc(${
      (-index * 100) / perView
    }% + ${dragOffset}px), 0, 0)`,
    transition: isDragging || reducedMotion ? "none" : undefined,
  };

  const firstShown = index + 1;
  const lastShown = Math.min(index + perView, count);

  return (
    <section
      className="pub-carousel"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={(e) => isKeyboardFocus(e.target) && setFocused(true)}
      onBlur={onBlur}
    >
      <div
        className="pub-carousel-chips"
        ref={chipsRef}
        role="group"
        aria-label="Choose a package"
        onKeyDown={onKeyDown}
      >
        {items.map((item, i) => {
          const visible = isVisible(i);
          return (
            <button
              key={getKey(item)}
              ref={(el) => (chipRefs.current[i] = el)}
              type="button"
              className={
                visible ? "pub-carousel-chip is-active" : "pub-carousel-chip"
              }
              aria-current={visible ? "true" : undefined}
              onClick={() => goTo(i)}
              style={{
                color: visible ? theme.body : theme.text,
                backgroundColor: visible ? theme.imageHighlight : "transparent",
                border: `1px solid ${theme.imageHighlight}${
                  visible ? "" : "55"
                }`,
              }}
            >
              {getLabel(item)}
            </button>
          );
        })}
      </div>

      <div
        className="pub-carousel-viewport"
        aria-live={autoplayEnabled && !paused ? "off" : "polite"}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={cancelDrag}
        onClickCapture={onClickCapture}
        // Focusing a link in an off-screen slide makes the browser scroll
        // this overflow:hidden box, which would desync it from the transform.
        onScroll={(e) => {
          e.currentTarget.scrollLeft = 0;
        }}
      >
        <div className="pub-carousel-track" style={trackStyle}>
          {items.map((item, i) => {
            const visible = isVisible(i);
            return (
              <div
                key={getKey(item)}
                className={
                  visible
                    ? "pub-carousel-slide is-visible"
                    : "pub-carousel-slide"
                }
                style={{ flexBasis: `${100 / perView}%` }}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${count}: ${getLabel(item)}`}
                aria-hidden={!visible}
                // Tabbing into a hidden slide brings it into view.
                onFocus={() => !visible && goTo(i)}
              >
                {renderItem(item, i)}
              </div>
            );
          })}
        </div>
      </div>

      {maxIndex > 0 && (
        <div className="pub-carousel-controls" onKeyDown={onKeyDown}>
          <button
            type="button"
            className="pub-carousel-arrow"
            onClick={prev}
            aria-label="Previous package"
            style={{ color: theme.text, border: `1px solid ${theme.text}` }}
          >
            <ChevronIcon direction="left" />
          </button>

          <div className="pub-carousel-status">
            <span
              className="pub-carousel-counter"
              style={{ color: theme.secondaryText }}
              aria-live="polite"
            >
              <strong style={{ color: theme.text }}>
                {perView > 1 && lastShown > firstShown
                  ? `${pad(firstShown)}–${pad(lastShown)}`
                  : pad(firstShown)}
              </strong>{" "}
              / {pad(count)}
            </span>

            {autoplayEnabled && (
              <div
                className="pub-carousel-progress-track"
                style={{ backgroundColor: theme.compImgHighlight }}
              >
                <div
                  // Re-keying restarts the fill whenever the slide changes,
                  // including manual navigation.
                  key={`${index}-${perView}`}
                  className="pub-carousel-progress-fill"
                  onAnimationEnd={next}
                  style={{
                    backgroundColor: theme.imageHighlight,
                    animationDuration: `${AUTOPLAY_MS}ms`,
                    animationPlayState: paused ? "paused" : "running",
                  }}
                />
              </div>
            )}

            {autoplayEnabled && (
              <button
                type="button"
                className="pub-carousel-toggle"
                onClick={() => setUserPaused((p) => !p)}
                aria-label={userPaused ? "Start autoplay" : "Pause autoplay"}
                style={{ color: theme.text }}
              >
                <PlayPauseIcon playing={!userPaused} />
              </button>
            )}
          </div>

          <button
            type="button"
            className="pub-carousel-arrow"
            onClick={next}
            aria-label="Next package"
            style={{ color: theme.text, border: `1px solid ${theme.text}` }}
          >
            <ChevronIcon direction="right" />
          </button>
        </div>
      )}
    </section>
  );
}
