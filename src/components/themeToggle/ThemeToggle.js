import React, { useContext } from "react";
import "./ThemeToggle.css";
import ThemeContext from "../../contexts/ThemeContext";

export default function ThemeToggle({ theme }) {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      type="button"
      className={isDark ? "theme-toggle is-dark" : "theme-toggle"}
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        backgroundColor: isDark ? theme.compImgHighlight : theme.highlight,
        borderColor: theme.imageHighlight + "59",
      }}
    >
      <span
        className="theme-toggle-thumb"
        style={{ backgroundColor: theme.imageHighlight }}
      />

      <span className="theme-toggle-icon theme-toggle-sun" aria-hidden="true">
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke={isDark ? theme.secondaryText : theme.body}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4.2" />
          <line x1="12" y1="1.6" x2="12" y2="3.6" />
          <line x1="12" y1="20.4" x2="12" y2="22.4" />
          <line x1="4.2" y1="4.2" x2="5.6" y2="5.6" />
          <line x1="18.4" y1="18.4" x2="19.8" y2="19.8" />
          <line x1="1.6" y1="12" x2="3.6" y2="12" />
          <line x1="20.4" y1="12" x2="22.4" y2="12" />
          <line x1="4.2" y1="19.8" x2="5.6" y2="18.4" />
          <line x1="18.4" y1="5.6" x2="19.8" y2="4.2" />
        </svg>
      </span>

      <span className="theme-toggle-icon theme-toggle-moon" aria-hidden="true">
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke={isDark ? theme.body : theme.secondaryText}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </span>
    </button>
  );
}
