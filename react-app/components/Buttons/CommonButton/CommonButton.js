import styled from 'styled-components'

import { getHover } from '../../../lib/stylingLib'

const StyledCommonButton = styled.button`
  background-color: ${({ theme, backgroundColor }) => theme[backgroundColor] || theme.foreground};
  color: ${({ theme }) => theme.buttonColor};
  transition: background-color 0.3s;
  margin: ${({ margin }) => margin || '0'};
  &:hover {
    background-color: ${({ theme, backgroundColor }) =>
      getHover(theme, theme[backgroundColor] || theme.foreground)};
  }
`
export default StyledCommonButton
