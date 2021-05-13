import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { LightTheme } from './themes/light_theme'
import { DarkTheme } from './themes/dark_theme'

import { GlobalStyles } from './global_styles/global_styles'

import Navbar from '../navbar/navbar'

import LandingHero from '../blocks/landing_hero/landing_hero'
import ArticlesContainer from "../blocks/articles_container/articles_container";

const checkWindowMatchMedia = () => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

const getPreferredTheme = () => {
  if (checkWindowMatchMedia()) {
    return DarkTheme
  }

  return LightTheme
}

const AppWrapper = ({
    nav_links,
    new_article_path,
    articles_path,
    articles
  }) => {
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
    <ThemeProvider theme={ currentTheme } >
      <GlobalStyles />
      <Navbar nav_links={ nav_links } new_article_path={ new_article_path } />
      <BrowserRouter>
        <Switch>
          <Route path='/' exact >
            <LandingHero articles_path={ articles_path } />
          </Route>
          <Route path={ articles_path } exact >
            <ArticlesContainer articles={ articles } articles_path={ articles_path } />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default AppWrapper
