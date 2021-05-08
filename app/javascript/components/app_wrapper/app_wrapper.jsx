import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import { LightTheme } from './themes/light_theme'
import { DarkTheme } from './themes/dark_theme'

import { GlobalStyles } from './global_styles/global_styles'

const checkWindowMatchMedia = () => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

const getPreferredTheme = () => {
  if (checkWindowMatchMedia()) {
    return DarkTheme
  }

  return LightTheme
}

const AppWrapper = ({ content }) => {
  const [ currentTheme, setCurrentTheme ] = useState(getPreferredTheme())

  const checkForTheme = () => {
    if (checkWindowMatchMedia()) {
      setCurrentTheme(DarkTheme)
    } else {
      setCurrentTheme(LightTheme)
    }
  }

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', checkForTheme)

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', checkForTheme)
    }
  }, [])

  return (
    <ThemeProvider theme={currentTheme} >
      <GlobalStyles />
      <h1>This is the test</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} ></div>
    </ThemeProvider>
  )
}

export default AppWrapper
