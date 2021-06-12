import React from 'react'
import { StyledNoArticlesContainer } from './StyledNoArticlesContainer'

import Link from 'next/link'

import Scroll from '../../assets/Scroll'

import Button from '../../components/Buttons/CommonButton/CommonButton'

const NoArticlesContainer = () => {
  return (
    <StyledNoArticlesContainer>
      <Scroll />
      <h2>No articles created yet.</h2>
      <Link href="/">
        <Button backgroundColor="green">Be the first!</Button>
      </Link>
    </StyledNoArticlesContainer>
  )
}

export default NoArticlesContainer
