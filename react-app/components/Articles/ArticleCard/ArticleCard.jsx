import React from 'react'

import { StyledArticleCard } from './StyledArticleCard'

const ArticleCard = ({ title, description, createdAt, id }) => {
  return (
    <StyledArticleCard>
      <h4>{title}</h4>
      <p>{description}</p>
      <small>Created at: {createdAt}</small>
    </StyledArticleCard>
  )
}

export default ArticleCard
