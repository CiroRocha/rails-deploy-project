import React from 'react'
import Link from 'next/link'

import axios from 'axios'

import {
  buildFrontendArticlePathWithId,
  buildFrontendEditArticlePathWithId,
  buildApiArticlePathWithId,
} from '../../../lib/requestsLib'

import { StyledArticleCard } from './StyledArticleCard'

import CommonButton from '../../Buttons/CommonButton/CommonButton'

const ArticleCard = ({ title, description, createdAt, id, onDelete = () => {} }) => {
  const descriptionToShow =
    description.length <= 350 ? description : description.substr(0, 350) + '...'

  return (
    <StyledArticleCard>
      <div className="article-card-preview-text">
        <h4>{title}</h4>
        <p>{descriptionToShow}</p>
        <small>Created at: {createdAt}</small>
      </div>
      <div className="article-card-controls">
        <Link href={buildFrontendArticlePathWithId(id)}>
          <CommonButton backgroundColor="blue">View</CommonButton>
        </Link>
        <Link href={buildFrontendEditArticlePathWithId(id)}>
          <CommonButton backgroundColor="blue">Edit</CommonButton>
        </Link>
        <CommonButton
          backgroundColor="red"
          onClick={() =>
            axios.delete(buildApiArticlePathWithId(id)).then((res) => onDelete(res, id))
          }
        >
          Delete
        </CommonButton>
      </div>
    </StyledArticleCard>
  )
}

export default ArticleCard
