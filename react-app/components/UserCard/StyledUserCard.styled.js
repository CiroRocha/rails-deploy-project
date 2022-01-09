import styled from 'styled-components'

export const UserCardContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.foreground};
  border-radius: 8px;
  padding: 16px;

  &:not(:last-of-type) {
    margin-bottom: 16px;
  }

  h4,
  h5 {
    margin: 0;
  }
`
