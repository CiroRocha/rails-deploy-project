import ArticleForm from '../../../components/Form/ArticleForm/ArticleForm'

import { getAllArticlesIds, getArticleById } from '../../../lib/requestsLib'

import StyledPageTitle from '../../../containers/PageTitle/StyledPageTitle'

const EditArticle = ({ articleData }) => {
  return (
    <>
      <StyledPageTitle>Edit article</StyledPageTitle>
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
