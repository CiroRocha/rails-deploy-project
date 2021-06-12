import React from 'react'
import Link from 'next/link'

import axios from 'axios'

import {
  buildFrontendArticlePathWithId,
  buildFrontendEditArticlePathWithId,
  buildApiArticlePathWithId,
} from '../../../lib/requestsLib'

import { StyledArticleCard } from './StyledArticleCard'

const ArticleCard = ({ title, description, createdAt, id, onDelete = () => {} }) => {
  return (
    <StyledArticleCard>
      <h4>{title}</h4>
      <p>{description}</p>
      <small>Created at: {createdAt}</small>
      <Link href={buildFrontendArticlePathWithId(id)}>
        <button>View</button>
      </Link>
      <Link href={buildFrontendEditArticlePathWithId(id)}>
        <button>Edit</button>
      </Link>
      <button
        onClick={() => axios.delete(buildApiArticlePathWithId(id)).then((res) => onDelete(res, id))}
      >
        Delete
      </button>
    </StyledArticleCard>
  )
}

export default ArticleCard
