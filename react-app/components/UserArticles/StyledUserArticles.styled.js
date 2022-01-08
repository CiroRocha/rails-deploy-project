import styled from 'styled-components'

export const UserArticlesContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`
export const UserArticleCardContainer = styled.div`
  display: grid;
  grid-template-columns: auto 100px;
  width: 100%;
  border: 1px solid;
  border-color: ${({ theme }) => theme.foreground};
  padding: 8px;
  border-radius: 8px;

  div.title {
    display: flex;
    align-items: center;

    p {
      margin: 0;
    }
  }

  div.actions {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background-color: ${({theme}) => theme.foreground};
    color: ${({ theme }) => theme.background};

    button {
      color: ${({theme}) => theme.background};
    }
  }
`
