import React from "react";
import "./OpenSourceProjectCard.css";
import { Fade } from "react-reveal";

export default function OpenSourceProjectCard({ project, theme }) {
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
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="os-project-btn os-github-btn"
              style={{ backgroundColor: theme.text, color: theme.body }}
            >
              GitHub ↗
            </a>
          ) : (
            <span
              className="os-project-btn os-github-btn disabled"
              style={{ backgroundColor: theme.text + "80", color: theme.body }}
            >
              GitHub ↗
            </span>
          )}

          {project.demo ? (
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
              Explore ↗
            </a>
          ) : (
            <span
              className="os-project-btn os-explore-btn disabled"
              style={{
                backgroundColor: theme.imageHighlight + "80",
                color: theme.body,
              }}
            >
              Explore ↗
            </span>
          )}
        </div>
      </div>
    </Fade>
  );
}
