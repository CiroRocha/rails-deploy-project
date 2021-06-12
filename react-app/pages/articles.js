import { useState } from 'react'

import ArticleCard from '../components/Articles/ArticleCard/ArticleCard'

import { getAllArticles } from '../lib/requestsLib'

const Articles = ({ articlesData }) => {
  const [articles, setArticles] = useState(articlesData)

  const onDelete = (res, id) => {
    const newArticlesData = articles.filter((article) => article.id !== id)
    setArticles(newArticlesData)
  }

  return (
    <>
      <h1>Articles page</h1>
      <div>
        {articles.map((article, index) => (
          <ArticleCard
            title={article.title}
            description={article.description}
            createdAt={article.created_at}
            id={article.id}
            onDelete={onDelete}
            key={index}
          />
        ))}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const articlesRequest = await getAllArticles()

  return {
    props: { articlesData: articlesRequest.data },
  }
}

export default Articles
