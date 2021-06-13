import styled from 'styled-components'

export const StyledShowArticlePage = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  word-wrap: break-word;

  .article-header {
    .article-data {
      text-align: center;

      h5 {
        opacity: 0.5;
      }
    }

    .article-actions {
      button {
        min-width: 110px;
        margin-top: 20px;
        margin-bottom: 60px;
      }

      button:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .article-description {
    line-height: 1.5;
    padding-bottom: 40px;
  }
`
