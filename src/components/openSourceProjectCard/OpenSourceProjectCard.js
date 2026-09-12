import React from "react";
import "./OpenSourceProjectCard.css";
import { Fade } from "react-reveal";

// "2026-06-20T08:27:53Z" -> "20 Jun 2026"
function formatDate(iso) {
  if (!iso) return null;
  const date = new Date(iso);
  if (isNaN(date.getTime())) return null;
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function OpenSourceProjectCard({ project, stats, theme }) {
  const lastUpdated = stats ? formatDate(stats.updatedAt) : null;

  return (
    <Fade bottom duration={2000} distance="40px">
      <div
        className="os-project-card"
        style={{
          backgroundColor: theme.imageHighlight + "15",
          border: `1px solid ${theme.imageHighlight}40`,
        }}
      >
        <div className="os-project-header">
          <div className="os-project-icon">{project.icon}</div>
          <div
            className="os-project-status"
            style={{
              color: theme.secondaryText,
              backgroundColor: theme.imageHighlight + "20",
            }}
          >
            {project.status}
          </div>
        </div>

        <div
          className="os-project-category"
          style={{ color: theme.secondaryText }}
        >
          {project.category}
        </div>

        <h2 className="os-project-title" style={{ color: theme.text }}>
          {project.title}
        </h2>

        <p className="os-project-highlight" style={{ color: theme.text }}>
          {project.highlight}
        </p>

        <p
          className="os-project-description"
          style={{ color: theme.secondaryText }}
        >
          {project.description}
        </p>

        {stats && (
          <div
            className="os-project-stats"
            style={{
              backgroundColor: theme.compImgHighlight,
              color: theme.secondaryText,
            }}
          >
            <span className="os-stat" title="Stars on GitHub">
              <span
                className="iconify os-stat-icon"
                data-icon="mdi:star-outline"
                data-inline="false"
                style={{ color: theme.imageHighlight }}
              />
              <strong style={{ color: theme.text }}>{stats.stars}</strong> stars
            </span>
            <span className="os-stat" title="Forks on GitHub">
              <span
                className="iconify os-stat-icon"
                data-icon="mdi:source-fork"
                data-inline="false"
                style={{ color: theme.imageHighlight }}
              />
              <strong style={{ color: theme.text }}>{stats.forks}</strong> forks
            </span>
            {stats.language && (
              <span className="os-stat" title="Primary language">
                <span
                  className="iconify os-stat-icon"
                  data-icon="mdi:code-tags"
                  data-inline="false"
                  style={{ color: theme.imageHighlight }}
                />
                <strong style={{ color: theme.text }}>{stats.language}</strong>
              </span>
            )}
            {lastUpdated && (
              <span className="os-stat" title="Last push to the default branch">
                <span
                  className="iconify os-stat-icon"
                  data-icon="mdi:history"
                  data-inline="false"
                  style={{ color: theme.imageHighlight }}
                />
                Updated {lastUpdated}
              </span>
            )}
          </div>
        )}

        <div className="os-project-technologies">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="os-tech-chip"
              style={{
                color: theme.text,
                backgroundColor: theme.compImgHighlight,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="os-project-features">
          {project.features.map((feature, i) => (
            <div
              key={i}
              className="os-feature-item"
              style={{ color: theme.secondaryText }}
            >
              <span
                className="os-feature-check"
                style={{ color: theme.imageHighlight }}
              >
                ✓
              </span>{" "}
              {feature}
            </div>
          ))}
        </div>

        <div
          className="os-project-footer"
          style={{ borderTop: `1px solid ${theme.imageHighlight}40` }}
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="os-project-btn os-github-btn"
              style={{ backgroundColor: theme.text, color: theme.body }}
            >
              GitHub ↗
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="os-project-btn os-explore-btn"
              style={{
                backgroundColor: theme.imageHighlight,
                color: theme.body,
              }}
            >
              {project.demoLabel || "Explore ↗"}
            </a>
          )}

          {!project.github && !project.demo && (
            <span
              className="os-project-note"
              style={{ color: theme.secondaryText }}
            >
              Source release in progress
            </span>
          )}
        </div>
      </div>
    </Fade>
  );
}
