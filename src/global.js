import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  /* Plain .css files can't reach the styled-components theme, so the tokens
     they need are republished here as custom properties. Anything keyed off
     isDark has no sensible single value across both modes. */
  :root {
    --body: ${({ theme }) => theme.body};
    --text: ${({ theme }) => theme.text};
    --secondary-text: ${({ theme }) => theme.secondaryText};
    --highlight: ${({ theme }) => theme.highlight};
    --accent: ${({ theme }) => theme.imageHighlight};
    --surface: ${({ theme }) => theme.compImgHighlight};
    --navicon-color: ${({ theme }) => theme.text};
    --card-border: ${({ theme }) => (theme.isDark ? "#26334D" : "#d9dbdf")};
    --card-shadow: ${({ theme }) =>
      theme.isDark ? "rgba(0, 0, 0, 0.55)" : "#d9dbdf"};
    --muted-text: ${({ theme }) => (theme.isDark ? "#94A7C4" : "#868e96")};
    --on-accent: ${({ theme }) => theme.body};
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    // flex-direction: column;
    // justify-content: center;
    // height: 100vh;
    // margin: 0;
    // padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: background 0.25s linear, color 0.25s linear;
  }

  /* body is a flex container, so its single app-root child is a flex item and
     defaults to min-width:auto — that floors it at the content's intrinsic
     width and pushes the page off-screen on narrow viewports. */
  body > div {
    min-width: 0;
    max-width: 100%;
    width: 100%;
  }

  /* Native widgets (scrollbars, form controls, the PDF viewer chrome) follow
     the mode instead of staying stuck in light. */
  :root {
    color-scheme: ${({ theme }) => (theme.isDark ? "dark" : "light")};
  }
`;
