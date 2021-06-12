import styled from 'styled-components'

export const StyledHelloPage = styled.div`
  width: 100%;
  max-width: 600px;
  height: ${({ theme }) => {
    return `calc(100vh - ${theme.navbarHeight})`
  }};
  margin: 0 auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 4.5rem;
  }

  span {
    font-size: 1.35rem;
    display: block;
    margin-bottom: 2rem;
  }

  .link-container {
    a {
      font-size: 1.25rem;

      &:first-of-type {
        margin-right: 40px;
      }
    }
  }
`
