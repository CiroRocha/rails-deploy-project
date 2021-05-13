import React from 'react'
import styled from 'styled-components'

import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const test = () => {
  const themeContext = useContext(ThemeContext);
  console.log("[ testing ]", themeContext);
  return (
    <TestWrapper>
      <h1>test 2</h1>
    </TestWrapper>
  )
}

const TestWrapper = styled.div`
  color: ${({ theme }) => theme.green};
`

export default test
