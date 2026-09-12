import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { GlobalStyles } from "./global";
import ThemeContext from "./contexts/ThemeContext";

const STORAGE_KEY = "portfolio-theme";

// A saved choice always wins; otherwise the site opens in dark mode.
// Private-mode browsers can throw on localStorage, so every access is guarded.
function getInitialMode() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "dark") return true;
    if (saved === "light") return false;
  } catch (e) {
    // Storage unavailable — fall through to the default.
  }
  return true;
}

function App() {
  const [isDark, setIsDark] = useState(getInitialMode);

  const theme = useMemo(() => (isDark ? darkTheme : lightTheme), [isDark]);

  const toggleTheme = useCallback(() => setIsDark((prev) => !prev), []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
    } catch (e) {
      // Not being able to persist the choice shouldn't break the page.
    }
    // Keeps form controls, scrollbars and the mobile browser chrome in step.
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
    // index.html paints <html> inline to avoid a first-load flash; keep that
    // inline value in step or it stays stuck on the initial mode.
    document.documentElement.style.backgroundColor = theme.body;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme.body);
  }, [isDark, theme.body]);

  const contextValue = useMemo(() => ({ isDark, toggleTheme }), [
    isDark,
    toggleTheme,
  ]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <div>
            <Main theme={theme} />
          </div>
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
