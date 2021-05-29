import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import { LightTheme } from './GlobalStyling/Themes/LightTheme'
import { DarkTheme } from './GlobalStyling/Themes/DarkTheme'

import { GlobalStyles } from './GlobalStyling/GlobalStyles'

import Navbar from './Navbar/Navbar'

const AppWrapper = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(LightTheme)

  const checkWindowMatchMedia = () => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  const getPreferredTheme = () => {
    if (checkWindowMatchMedia()) {
      return DarkTheme
    }

    return LightTheme
  }

  const checkForTheme = () => {
    if (checkWindowMatchMedia()) {
      setCurrentTheme(DarkTheme)
    } else {
      setCurrentTheme(LightTheme)
    }
  }

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', checkForTheme)
    setCurrentTheme(getPreferredTheme())

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', checkForTheme)
    }
  }, [])

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Navbar
        links= {[
          {
            href: '/articles',
            content: 'All articles'
          }
        ]}
      />
      {children}
    </ThemeProvider>
  )
}

export default AppWrapper
