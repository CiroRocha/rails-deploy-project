import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

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
