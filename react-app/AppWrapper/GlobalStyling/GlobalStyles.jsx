import { createGlobalStyle } from 'styled-components'

import { getHover } from '../../lib/stylingLib'

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    border: 0;
    box-sizing: border-box;
    font-size: 100%;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.foreground};

    * {
      margin: 0;
      border: 0;
      box-sizing: border-box;
    }
  }

  html { height: 100% !important }
  body { min-height: 100% !important }

  h1, h2, h3, h4, h5, h6, p { margin-bottom: 1rem; }

  h1 { font-size: 3.052rem; }

  h2 { font-size: 2.441rem; }

  h3 { font-size: 1.953rem; }

  h4 { font-size: 1.563rem; }

  h5 { font-size: 1.25rem; }

  p, h6, button { font-size: 1rem; }

  small, .text_small { font-size: 0.8rem; }

  a {
    text-decoration: none;
    font-weight: bold;
    color: ${({ theme }) => theme.link};
    transition: color 0.15s;

    &:visited {
      color: ${({ theme }) => theme.link};
    }

    &:hover {
      color: ${({ theme }) => getHover(theme, theme.link, 0.15)};
    }
  }

  button {
    background-color: transparent;
    color: ${({ theme }) => theme.foreground};
    font-weight: bold;
    border: 0;
    cursor: pointer;
    padding: 8px 16px;
    border-radius: 4px;
  }
`
