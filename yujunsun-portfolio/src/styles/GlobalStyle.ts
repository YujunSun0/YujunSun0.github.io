import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --font-sans: "NotoSansKR", "Apple SD Gothic Neo", "Malgun Gothic", system-ui,
      sans-serif;

    --color-bg: #ffffff;
    --color-surface: #f6f7f9;
    --color-border: #e6e8ec;
    --color-border-strong: #c9cdd4;
    --color-text: #16181d;
    --color-text-body: #3d424d;
    --color-text-muted: #5f6673;
    --color-accent: #2350d8;
    --color-accent-strong: #163a9e;
    --color-accent-soft: #eef2fd;
    --color-success: #1d6b3a;
    --color-success-soft: #e7f5ec;
    --color-neutral-soft: #eef0f3;

    --max-width: 1080px;
    --max-width-narrow: 880px;
    --header-height: 6rem;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    scroll-padding-top: calc(var(--header-height) + 1.6rem);
  }

  body {
    background-color: var(--color-bg);
    font-family: var(--font-sans);
    font-size: 1.6rem;
    color: var(--color-text);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    word-break: keep-all;
  }

  strong {
    font-weight: 700;
  }

  a {
    color: var(--color-accent);
    text-decoration: none;

    &:hover {
      color: var(--color-accent-strong);
      text-decoration: underline;
    }
  }

  a:focus-visible,
  button:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }

  img {
    max-width: 100%;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }
`

export default GlobalStyle
