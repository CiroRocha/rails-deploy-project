import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-size: 100%;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.foreground};
    width: 100%;
    height: 100%;

    * {
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
    }
  }

  h1, h2, h3, h4, h5, h6, p { margin-bottom: 1rem; }

  h1 { font-size: 3.052rem; }

  h2 { font-size: 2.441rem; }

  h3 { font-size: 1.953rem; }

  h4 { font-size: 1.563rem; }

  h5 { font-size: 1.25rem; }

  p, h6 { font-size: 1rem; }

  small, .text_small { font-size: 0.8rem; }

  a {
    text-decoration: none;
    font-weight: bold;
    color: ${({ theme }) => theme.link.common};
    transition: color 0.15s;

    &:visited {
      color: ${({ theme }) => theme.link.common};
    }

    &:hover {
      color: ${({ theme }) => theme.link.hover};
    }
  }
`
