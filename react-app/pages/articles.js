import ArticleCard from '../components/Articles/ArticleCard/ArticleCard'

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

export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:8000/articles`)
  const articlesData = await res.json()

  return {
    props: { articlesData }, // will be passed to the page component as props
  }
}

export default Articles
