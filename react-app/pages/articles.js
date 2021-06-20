import { useState } from 'react'

import ArticleCard from '../components/Articles/ArticleCard/ArticleCard'

import NoArticlesContainer from '../containers/NoArticlesContainer/NoArticlesContainer'
import StyledPageTitle from '../containers/PageTitle/StyledPageTitle'

import { getAllArticles } from '../lib/requestsLib'

const Articles = ({ articlesData }) => {
  const [articles, setArticles] = useState(articlesData)

  const onDelete = (res, id) => {
    const newArticlesData = articles.filter((article) => article.id !== id)
    setArticles(newArticlesData)
  }

  return (
    <>
      <StyledPageTitle>Articles page</StyledPageTitle>
      <div>
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <ArticleCard
              title={article.title}
              description={article.description}
              createdAt={article.created_at}
              id={article.id}
              onDelete={onDelete}
              key={index}
            />
          ))
        ) : (
          <NoArticlesContainer />
        )}
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const articlesRequest = await getAllArticles()

  return {
    props: { articlesData: articlesRequest.data },
  }
}

export default Articles
