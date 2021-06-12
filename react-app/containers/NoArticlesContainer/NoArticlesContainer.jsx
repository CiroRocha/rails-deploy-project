import React from 'react'
import { StyledNoArticlesContainer } from './StyledNoArticlesContainer'

import Link from 'next/link'

import { getCreateArticlePath } from '../../lib/requestsLib'

import Scroll from '../../assets/Scroll'

import Button from '../../components/Buttons/CommonButton/CommonButton'

const NoArticlesContainer = () => {
  return (
    <StyledNoArticlesContainer>
      <Scroll />
      <h2>No articles created yet.</h2>
      <Link href={getCreateArticlePath()}>
        <Button backgroundColor="green">Be the first!</Button>
      </Link>
    </StyledNoArticlesContainer>
  )
}

export default NoArticlesContainer
