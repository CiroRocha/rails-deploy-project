import { getAllArticlesIds, getArticleById } from '../../lib/requestsLib'

const ArticlePage = ({ articleData }) => {
  return (
    <div>
      <h2>{articleData.title}</h2>
      <small>From {articleData.created_at}</small>
      <p>{articleData.description}</p>
    </div>
  )
}

export async function getStaticPaths() {
  const allArticlesId = await getAllArticlesIds()
  const paths = []
  allArticlesId.map((id) => {
    paths.push({ params: { id: id.toString() } })
  })
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const articleRequest = await getArticleById(params.id)
  const articleData = articleRequest.data
  return {
    props: { articleData },
  }
}

export default ArticlePage
