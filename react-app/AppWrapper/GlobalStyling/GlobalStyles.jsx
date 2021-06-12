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

  .form-field {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 20px;

    &-label {
      margin-bottom: 10px;
    }

    input, textarea {
      width: 100%;
      border: 2px solid;
      border-color: ${({ theme }) => theme.foreground};
      border-radius: 6px;
      padding: 12px 8px;

      &:focus {
        border-color: ${({ theme }) => theme.green};
        outline: 0;
      }
    }

    textarea {
      min-height: 110px;
      resize: vertical;

      ::-webkit-scrollbar { width: 8px; cursor: default; }
      ::-webkit-scrollbar-track { background: transparent; cursor: default; }
      ::-webkit-scrollbar-thumb { background: #CCCCCC; border-radius: 4px; cursor: default; }
      ::-webkit-scrollbar-thumb:hover { background: #AAAAAA; }
    }

    .error-message {
      margin-top: 8px;
      color: ${({ theme }) => theme.red};
    }

    &.invalid {
      input, textarea {
        border-color: ${({ theme }) => theme.red};
      }
    }
  }
`
