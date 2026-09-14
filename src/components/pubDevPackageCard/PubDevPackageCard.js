import React, { useState } from "react";
import "./PubDevPackageCard.css";
import { Fade } from "react-reveal";

// Formats an ISO date from the pub.dev API into "20 Jun 2026".
function formatPublished(iso) {
  if (!iso) return null;
  const date = new Date(iso);
  if (isNaN(date.getTime())) return null;
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// `animate` wraps the card in a scroll reveal. Turn it off when the card sits
// inside something that animates it already, such as the packages carousel.
export default function PubDevPackageCard({
  pkg,
  stats,
  isLive,
  theme,
  animate = true,
}) {
  const [copied, setCopied] = useState(false);

  const copyInstallCommand = () => {
    const command = pkg.installCommand;
    if (!command || !navigator.clipboard) return;
    navigator.clipboard.writeText(command).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
      () => setCopied(false)
    );
  };

  const publishedOn = formatPublished(stats.published);
  const scorePercent =
    stats.maxPoints > 0
      ? Math.round((stats.grantedPoints / stats.maxPoints) * 100)
      : 0;

  const metrics = [
    {
      id: "points",
      label: "Pub points",
      value: `${stats.grantedPoints}/${stats.maxPoints}`,
      icon: "mdi:check-decagram",
    },
    {
      id: "likes",
      label: stats.likeCount === 1 ? "Like" : "Likes",
      value: stats.likeCount,
      icon: "mdi:thumb-up-outline",
    },
    {
      id: "downloads",
      label: "Downloads / 30d",
      value: stats.downloadCount30Days,
      icon: "mdi:download-outline",
    },
    {
      id: "license",
      label: "License",
      value: pkg.license,
      icon: "mdi:scale-balance",
    },
  ];

  const card = (
    <div
      className="pub-package-card"
      style={{
        backgroundColor: theme.imageHighlight + "15",
        border: `1px solid ${theme.imageHighlight}40`,
      }}
    >
      <div className="pub-package-top">
        <div className="pub-package-identity">
          <div className="pub-package-icon">{pkg.icon}</div>
          <div className="pub-package-naming">
            <h2 className="pub-package-name" style={{ color: theme.text }}>
              {pkg.name}
            </h2>
            <div
              className="pub-package-category"
              style={{ color: theme.secondaryText }}
            >
              {pkg.category}
            </div>
          </div>
        </div>

        <div className="pub-package-badges">
          <span
            className="pub-version-badge"
            style={{
              backgroundColor: theme.imageHighlight,
              color: theme.body,
            }}
          >
            v{stats.version}
          </span>
          <span
            className="pub-live-badge"
            style={{ color: theme.secondaryText }}
            title={
              isLive
                ? "Statistics fetched live from the pub.dev API"
                : "Showing last known statistics — pub.dev could not be reached"
            }
          >
            <span
              className="pub-live-dot"
              style={{ backgroundColor: isLive ? "#2ECC71" : "#F39C12" }}
            />
            {isLive ? "Live from pub.dev" : "Cached stats"}
          </span>
        </div>
      </div>

      <p className="pub-package-tagline" style={{ color: theme.text }}>
        {pkg.tagline}
      </p>
      <p
        className="pub-package-description"
        style={{ color: theme.secondaryText }}
      >
        {pkg.description}
      </p>

      <div className="pub-metrics-grid">
        {metrics.map((metric) => (
          <div
            key={metric.id}
            className="pub-metric"
            style={{ backgroundColor: theme.compImgHighlight }}
          >
            <span
              className="iconify pub-metric-icon"
              data-icon={metric.icon}
              data-inline="false"
              style={{ color: theme.imageHighlight }}
            />
            <div className="pub-metric-value" style={{ color: theme.text }}>
              {metric.value}
            </div>
            <div
              className="pub-metric-label"
              style={{ color: theme.secondaryText }}
            >
              {metric.label}
            </div>
          </div>
        ))}
      </div>

      <div className="pub-score-bar-div">
        <div
          className="pub-score-bar-labels"
          style={{ color: theme.secondaryText }}
        >
          <span>pub.dev score</span>
          <span>{scorePercent}%</span>
        </div>
        <div
          className="pub-score-bar-track"
          style={{ backgroundColor: theme.compImgHighlight }}
          role="progressbar"
          aria-valuenow={scorePercent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`pub.dev score for ${pkg.name}`}
        >
          <div
            className="pub-score-bar-fill"
            style={{
              width: `${scorePercent}%`,
              backgroundColor: theme.imageHighlight,
            }}
          />
        </div>
      </div>

      {pkg.installCommand && (
        <div className="pub-install-div">
          <code
            className="pub-install-command"
            style={{
              backgroundColor: theme.compImgHighlight,
              color: theme.text,
            }}
          >
            {pkg.installCommand}
          </code>
          <button
            type="button"
            className="pub-copy-btn"
            onClick={copyInstallCommand}
            aria-label={`Copy install command for ${pkg.name}`}
            style={{
              backgroundColor: copied ? theme.imageHighlight : "transparent",
              color: copied ? theme.body : theme.text,
              border: `1px solid ${theme.imageHighlight}`,
            }}
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      )}

      <ul className="pub-highlights">
        {pkg.highlights.map((highlight, i) => (
          <li
            key={i}
            className="pub-highlight-item"
            style={{ color: theme.secondaryText }}
          >
            <span
              className="pub-highlight-check"
              style={{ color: theme.imageHighlight }}
            >
              ✓
            </span>
            {highlight}
          </li>
        ))}
      </ul>

      <div className="pub-platforms">
        {pkg.platforms.map((platform, i) => (
          <span
            key={i}
            className="pub-platform-chip"
            style={{
              color: theme.text,
              backgroundColor: theme.compImgHighlight,
            }}
          >
            {platform}
          </span>
        ))}
      </div>

      <div
        className="pub-package-footer"
        style={{ borderTop: `1px solid ${theme.imageHighlight}40` }}
      >
        {publishedOn && (
          <span
            className="pub-published-on"
            style={{ color: theme.secondaryText }}
          >
            Latest release {publishedOn}
          </span>
        )}
        <div className="pub-package-actions">
          {pkg.repository && (
            <a
              href={pkg.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="pub-action-btn pub-secondary-btn"
              style={{
                color: theme.text,
                border: `1px solid ${theme.text}`,
              }}
            >
              GitHub ↗
            </a>
          )}
          <a
            href={pkg.pubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pub-action-btn pub-primary-btn"
            style={{
              backgroundColor: theme.text,
              color: theme.body,
              border: `1px solid ${theme.text}`,
            }}
          >
            View on pub.dev ↗
          </a>
        </div>
      </div>
    </div>
  );

  return animate ? (
    <Fade bottom duration={2000} distance="40px">
      {card}
    </Fade>
  ) : (
    card
  );
}
