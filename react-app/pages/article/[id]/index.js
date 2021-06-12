import Link from 'next/link'
import { useRouter } from 'next/router'

import axios from 'axios'

import {
  getAllArticlesIds,
  getArticleById,
  buildFrontendEditArticlePathWithId,
  buildApiArticlePathWithId,
  getFrontendArticlesPath,
} from '../../../lib/requestsLib'

const ArticlePage = ({ articleData }) => {
  const router = useRouter()

  return (
    <div>
      <div>
        <div>
          <h2>{articleData.title}</h2>
          <small>From {articleData.created_at}</small>
        </div>
        <div>
          <Link href={buildFrontendEditArticlePathWithId(articleData.id)}>
            <button>Edit</button>
          </Link>
          <button
            onClick={() =>
              axios
                .delete(buildApiArticlePathWithId(articleData.id))
                .then(() => router.push(getFrontendArticlesPath()))
            }
          >
            Delete
          </button>
        </div>
      </div>
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
