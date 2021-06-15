import axios from 'axios'

const FRONTEND_ARTICLE_PATH = `${process.env.FRONTEND_PATH}/article/`
const FRONTEND_NEW_ARTICLE_PATH = `${process.env.FRONTEND_PATH}/article/new/`
const FRONTEND_ARTICLES_PATH = `${process.env.FRONTEND_PATH}/articles/`

const API_ARTICLES_PATH = `${process.env.BACKEND_PATH}/articles/`

export const getCreateArticlePath = () => FRONTEND_NEW_ARTICLE_PATH

export const buildFrontendArticlePathWithId = (id) => {
  return `${FRONTEND_ARTICLE_PATH}${id}`
}

export const buildFrontendEditArticlePathWithId = (id) => {
  return `${buildFrontendArticlePathWithId(id)}/edit`
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
