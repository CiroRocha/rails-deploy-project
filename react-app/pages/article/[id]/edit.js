import ArticleForm from '../../../components/Form/ArticleForm/ArticleForm'

import { getAllArticlesIds, getArticleById } from '../../../lib/requestsLib'

const EditArticle = ({ articleData }) => {
  return (
    <>
      <h1>Create your article</h1>
      <ArticleForm
        title={articleData.title}
        description={articleData.description}
        id={articleData.id}
        isEdit={true}
      />
    </>
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

export default EditArticle
