import React from 'react'
import { UserArticlesContainer } from './StyledUserArticles.styled'
import UserArticleCard from './UserArticleCard'

const UserArticles = ({ articlesData = [] }) => {
  return (
    <UserArticlesContainer>
      {articlesData.map(article => <UserArticleCard article={article} />)}
    </UserArticlesContainer>
  )
}

export default UserArticles
