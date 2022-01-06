import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import axios from 'axios'

import { StyledShowArticlePage } from './StyledShowArticlePage'

import CommonButton from '../../components/Buttons/CommonButton/CommonButton'
import StyledPageTitle from '../PageTitle/StyledPageTitle'

import {
  buildFrontendEditArticlePathWithId,
  buildApiArticlePathWithId,
  getFrontendArticlesPath,
} from '../../lib/requestsLib'

const ShowArticlePage = ({ articleData }) => {
  const router = useRouter()

  if (!articleData || Object.keys(articleData).length === 0) {
    return <h1>Article not found :(</h1>
  }

  const article = articleData.article
  const user = articleData.user

  return (
    <StyledShowArticlePage>
      <div className="article-header">
        <div className="article-data">
          <StyledPageTitle padding="20px 0 10px 0">{article.title}</StyledPageTitle>
          <h5>From {user.username}</h5>
          <div className="article-actions">
            <Link href={buildFrontendEditArticlePathWithId(article.id)}>
              <CommonButton backgroundColor="blue">Edit</CommonButton>
            </Link>
            <CommonButton
              backgroundColor="red"
              onClick={() =>
                axios
                  .delete(buildApiArticlePathWithId(article.id))
                  .then(() => router.push(getFrontendArticlesPath()))
              }
            >
              Delete
            </CommonButton>
          </div>
        </div>
      </div>
      <div className="article-description">
        <p>{article.description}</p>
      </div>
    </StyledShowArticlePage>
  )
}

export default ShowArticlePage
