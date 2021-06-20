import React from 'react'

import { getArticleById } from '../../lib/requestsLib'

import ShowArticlePage from '../../containers/ShowArticlePage/ShowArticlePage'

const ArticlePage = ({ articleData }) => {
  return <ShowArticlePage articleData={articleData} />
}

export async function getServerSideProps(context) {
  const { articleId } = context.query
  const articleRequest = await getArticleById(articleId)
  const articleData = articleRequest.data
  return {
    props: { articleData },
  }
}

export default ArticlePage
