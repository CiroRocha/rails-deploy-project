import React from 'react'
import Link from 'next/link'

import { StyledNavbar } from './StyledNavbar'

import Logo from '../../assets/Logo'
import Navigation from './Navigation/Navigation'

const Navbar = ({ links }) => {
  return (
    <StyledNavbar>
      <div className="content-container">
        <Link href="/">
          <a className="logo-link">
            <Logo />
          </a>
        </Link>
        <Navigation links={links} />
      </div>
    </StyledNavbar>
  )
}

export default Navbar
