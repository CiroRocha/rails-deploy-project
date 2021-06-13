import styled from 'styled-components'

const StyledPageTitle = styled.h1`
  font-family: 'Raleway', sans-serif;
  width: 100%;
  text-align: center;
  padding: ${(props) => props.padding || '20px 0 60px 0'};
  margin: 0;
`

export default StyledPageTitle
