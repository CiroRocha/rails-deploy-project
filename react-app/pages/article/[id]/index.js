import { getAllArticlesIds, getArticleById } from '../../../lib/requestsLib'

import ShowArticlePage from '../../../containers/ShowArticlePage/ShowArticlePage'

const ArticlePage = ({ articleData }) => {
  return <ShowArticlePage articleData={articleData} />
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
