import { createContext } from "react";

// Lets any component read or flip the colour mode without threading props
// through Main and every page. App is the single provider.
const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
});

export default ThemeContext;
