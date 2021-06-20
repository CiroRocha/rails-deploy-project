import ArticleForm from '../../components/Form/ArticleForm/ArticleForm'

import { getArticleById } from '../../lib/requestsLib'

import StyledPageTitle from '../../containers/PageTitle/StyledPageTitle'

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

export async function getServerSideProps(context) {
  const { articleId } = context.query
  const articleRequest = await getArticleById(articleId)
  const articleData = articleRequest.data
  return {
    props: { articleData },
  }
}

export default EditArticle
