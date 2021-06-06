import ArticleCard from '../components/Articles/ArticleCard/ArticleCard'

import { getAllArticles } from '../lib/requestsLib'

const Articles = ({ articlesData }) => {
  return (
    <>
      <h1>Articles page</h1>
      <div>
        {articlesData.map((article, index) => (
          <ArticleCard
            title={article.title}
            description={article.description}
            createdAt={article.created_at}
            id={article.id}
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
