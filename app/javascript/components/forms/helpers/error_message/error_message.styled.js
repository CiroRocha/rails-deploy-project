import styled from 'styled-components'

export const StyledErrorMessage = styled.div`
  p {
    color: red;
    display: none;
    &.show {
      display: block;
    }
  }
`
