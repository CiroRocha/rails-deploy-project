import React from 'react'
import { useRouter } from 'next/router'

import { UserArticleCardContainer } from './StyledUserArticles.styled'

import { buildFrontendArticlePathWithId } from '../../lib/requestsLib'

const UserArticleCard = ({ article }) => {
  const router = useRouter()

  return (
    <UserArticleCardContainer>
      <div className='title'>
        <p>{ article.title }</p>
      </div>
      <div className='actions'>
        <button onClick={() => router.push(buildFrontendArticlePathWithId(article.id))}>Edit</button>
      </div>
    </UserArticleCardContainer>
  )
}

export default UserArticleCard
