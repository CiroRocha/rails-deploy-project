import axios from 'axios'

const FRONTEND_ARTICLE_PATH = 'http://localhost:3000/article/'
const FRONTEND_ARTICLES_PATH = 'http://localhost:3000/articles/'

const API_ARTICLES_PATH = 'http://localhost:8000/articles/'

export const buildFrontendArticlePathWithId = (id) => {
  return `${FRONTEND_ARTICLE_PATH}${id}`
}

export const buildApiArticlePathWithId = (id) => {
  return `${API_ARTICLES_PATH}${id}`
}

export const getApiArticlesPath = () => API_ARTICLES_PATH

export const getFrontendArticlesPath = () => FRONTEND_ARTICLES_PATH

export const getAllArticles = async () => {
  const allArticlesRequest = await axios.get(API_ARTICLES_PATH)
  return allArticlesRequest
}

export const getArticleById = async (id) => {
  const articleDataRequest = await axios.get(buildApiArticlePathWithId(id))
  return articleDataRequest
}

export const getAllArticlesIds = async () => {
  const allArticlesRequest = await getAllArticles()
  const idList = []
  allArticlesRequest.data.map((article) => {
    idList.push(article.id)
  })
  return idList
}
