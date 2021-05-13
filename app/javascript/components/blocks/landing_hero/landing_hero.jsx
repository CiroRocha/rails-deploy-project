import React from 'react'

import { Link } from 'react-router-dom'

import { StyledLandingHeroContainer } from './landing_hero.styled'

const LandingHero = ({ articles_path }) => {
  return (
    <StyledLandingHeroContainer>
      <span>👋</span>
      <h1>Welcome</h1>
      <Link to={ articles_path } >Check out the articles</Link>
    </StyledLandingHeroContainer>
  )
}

export default LandingHero
