import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --font-NotoSansKR: "NotoSansKR";
    --font-JalnanGothic: "JalnanGothic";

    --color-bg: #0f1114;
    --color-bg-alt: #161a1e;
    --color-bg-card: #1c2028;
    --color-border: #2a2e35;
    --color-primary: #7c5cfc;
    --color-primary-light: #a78bfa;
    --color-text: #e4e4e7;
    --color-text-muted: #9ca3af;
    --color-text-dim: #6b7280;
    --color-white: #ffffff;
    --color-accent-gradient: linear-gradient(135deg, #7c5cfc 0%, #a78bfa 100%);

    --max-width: 1000px;

    --bs-breakpoint-xs: 0;
    --bs-breakpoint-sm: 576px;
    --bs-breakpoint-md: 768px;
    --bs-breakpoint-lg: 905px;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  *::-webkit-scrollbar {
    display: none;
  }

  html, body {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    overflow: scroll;
    -ms-overflow-style: none;
    background-color: var(--color-bg);
    font-family: var(--font-NotoSansKR);
    color: var(--color-text);
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-NotoSansKR);
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1.3;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
  }

  @media (max-width: 905px) {
    html {
      font-size: 9px;
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 8px;
    }
  }

  @media (max-width: 576px) {
    html {
      font-size: 7px;
    }
  }
`

export default GlobalStyle
