import React, { useEffect } from 'react'

import { StyledArticlesContainer } from './articles_container.styled'

import ArticleCard from '../../cards/article_card/article_card'

const ArticlesContainer = ({ articles, articles_path }) => {

  const testing = []

  useEffect(async () => {
    fetch(`/all`, {
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(res => { console.log('[ res ]', res) })
  }, [])

  const allArticles = []
  articles.forEach(article => {
    allArticles.push(<ArticleCard article={article} />)
  })

  return (
    <StyledArticlesContainer>
      { allArticles }
    </StyledArticlesContainer>
  )
}

export default ArticlesContainer
