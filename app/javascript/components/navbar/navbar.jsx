import React from 'react'

import { StyledNavbar } from './navbar.styled'

import Logo from '../logo/logo'
import Navigation from './navigation_links/navigation'

const Navbar = ({ nav_links, new_article_path }) => {
  return (
    <StyledNavbar>
      <a href='/' aria-labelledby='Home link'>
        <Logo />
      </a>
      <Navigation links={ nav_links } new_article_path={ new_article_path } />
    </StyledNavbar>
  )
}

export default Navbar
