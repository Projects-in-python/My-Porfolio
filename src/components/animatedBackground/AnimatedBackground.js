import React, { useEffect, useRef } from "react";
import "./AnimatedBackground.css";
import { getPalette, makeGlowSprite } from "./palette";
import { buildLayers } from "./variants";

const MAX_DPR = 2;
// Clamp the frame delta so a backgrounded tab doesn't resume with one huge step.
const MAX_STEP = 1 / 20;

function prefersReducedMotion() {
  return (
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * A transparent canvas layer that sits behind a section's content.
 *
 * The host element needs the `anim-bg-host` class: it sets `isolation:isolate`,
 * which contains this `z-index:-1` canvas inside the host's stacking context so
 * it paints above the page background but beneath every child — no changes to
 * the content markup, and nothing to fight over z-index with.
 */
export default function AnimatedBackground({ variant, theme }) {
  const wrapRef = useRef(null);
  const stickyRef = useRef(null);
  const canvasRef = useRef(null);
  // Scroll progress through the section, read by scroll-aware layers.
  const scrollRef = useRef(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    const sticky = stickyRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !sticky || !canvas) return undefined;

    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    const reduced = prefersReducedMotion();
    const palette = getPalette(theme);
    const glowSprite = palette.glow
      ? makeGlowSprite(palette.primary, 24)
      : null;
    const layers = buildLayers(variant);

    const env = {
      w: 0,
      h: 0,
      t: 0,
      palette,
      glowSprite,
      scroll: 0,
      reduced,
    };

    let dpr = 1;
    let frame = null;
    let last = 0;
    let visible = true;
    let disposed = false;

    function resize() {
      const hostRect = wrap.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // Never allocate a backing store taller than the viewport: a full-page
      // canvas on a long section would run to hundreds of megabytes.
      sticky.style.height = Math.min(vh, Math.round(hostRect.height)) + "px";

      const rect = sticky.getBoundingClientRect();
      const w = Math.max(1, Math.round(rect.width));
      const h = Math.max(1, Math.round(rect.height));
      dpr = Math.min(MAX_DPR, window.devicePixelRatio || 1);

      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";

      env.w = w;
      env.h = h;
      for (const layer of layers) layer.resize(env);
      updateScroll();
      render();
    }

    function updateScroll() {
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // 0 as the section enters from below, 1 once it has fully passed up.
      const raw = (vh - rect.top) / (vh + rect.height);
      scrollRef.current = Math.max(0, Math.min(1, raw));
      env.scroll = scrollRef.current;

      // Slide the viewport-sized canvas down the section so it always covers
      // what's on screen, clamped to the section's own bounds.
      const travel = Math.max(0, rect.height - sticky.offsetHeight);
      const offset = Math.max(0, Math.min(travel, -rect.top));
      sticky.style.transform = "translate3d(0," + offset + "px,0)";
    }

    function render() {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // clearRect (not fillRect) is what keeps the layer transparent.
      ctx.clearRect(0, 0, env.w, env.h);
      for (const layer of layers) layer.draw(ctx, env);
    }

    function loop(now) {
      if (disposed) return;
      const dt = last ? Math.min(MAX_STEP, (now - last) / 1000) : 0;
      last = now;
      env.t += dt;
      updateScroll();
      for (const layer of layers) layer.update(dt, env);
      render();
      frame = window.requestAnimationFrame(loop);
    }

    function start() {
      if (disposed || reduced || frame !== null) return;
      last = 0;
      frame = window.requestAnimationFrame(loop);
    }

    function stop() {
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
        frame = null;
      }
    }

    updateScroll();
    resize();

    // Only animate while the section is actually on screen.
    let observer = null;
    if (typeof window.IntersectionObserver === "function") {
      observer = new window.IntersectionObserver(
        (entries) => {
          visible = entries[0].isIntersecting;
          if (visible) start();
          else stop();
        },
        { rootMargin: "120px" }
      );
      observer.observe(wrap);
    } else {
      start();
    }

    let resizeObserver = null;
    if (typeof window.ResizeObserver === "function") {
      resizeObserver = new window.ResizeObserver(resize);
      resizeObserver.observe(wrap);
    } else {
      window.addEventListener("resize", resize);
    }

    const onScroll = () => {
      updateScroll();
      // Reduced motion still gets the scroll-driven reveal, just no loop.
      if (reduced) render();
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const onVisibility = () => {
      if (document.hidden) stop();
      else if (visible) start();
    };
    document.addEventListener("visibilitychange", onVisibility);

    if (reduced) render();

    return () => {
      disposed = true;
      stop();
      if (observer) observer.disconnect();
      if (resizeObserver) resizeObserver.disconnect();
      else window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
    };
    // Rebuilding on theme change is what recolours the whole scene.
  }, [variant, theme]);

  return (
    <div className="anim-bg" ref={wrapRef} aria-hidden="true">
      {/* Sticky + viewport-tall: the canvas follows the scroll instead of
          spanning the whole section, which on a long page would mean a
          backing store of hundreds of megabytes. */}
      <div className="anim-bg-sticky" ref={stickyRef}>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}
