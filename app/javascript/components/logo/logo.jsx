import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import { LogoStyles } from './logo.styled'

const Logo = ({ width = '150px', height = 'auto' }) => {
  const theme = useContext(ThemeContext)

  return (
    <LogoStyles width={ width } height={ height } >
      <img src={ theme.logoFull } />
    </LogoStyles>
  )
}

export default Logo
