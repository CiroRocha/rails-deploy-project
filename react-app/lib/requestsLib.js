import axios from 'axios'

const FRONTEND_ARTICLE_PATH = `${process.env.FRONTEND_PATH}/article/`
const FRONTEND_NEW_ARTICLE_PATH = `${process.env.FRONTEND_PATH}/article/new/`
const FRONTEND_ARTICLES_PATH = `${process.env.FRONTEND_PATH}/articles`

const API_ARTICLES_PATH = `${process.env.BACKEND_PATH}/articles`
const API_REGISTER_PATH = `${process.env.BACKEND_PATH}/register`
const API_USER_UPDATE_PATH = `${process.env.BACKEND_PATH}/user/edit`
const API_USER_ARTICLES_PATH = `${process.env.BACKEND_PATH}/user/articles`
const API_USERS_PATH = `${process.env.BACKEND_PATH}/users`

const API_LOGIN_PATH = `${process.env.BACKEND_PATH}/login`

export const getCreateArticlePath = () => FRONTEND_NEW_ARTICLE_PATH

export const buildFrontendArticlePathWithId = (id) => `${FRONTEND_ARTICLE_PATH}show?articleId=${id}`

export const buildFrontendEditArticlePathWithId = (id) =>
  `${FRONTEND_ARTICLE_PATH}edit?articleId=${id}`

export const getFrontendArticlesPath = () => FRONTEND_ARTICLES_PATH

export const buildApiArticlePathWithId = (id) => `${API_ARTICLES_PATH}${id}`

export const getApiArticlesPath = () => API_ARTICLES_PATH

export const getApiUsersPath = () => API_USERS_PATH

export const getApiUserRegisterPath = () => API_REGISTER_PATH

export const getApiUserUpdatePath = (id) => `${API_USER_UPDATE_PATH}/${id}`

export const getApiArticlesByUser = (id) => `${API_USER_ARTICLES_PATH}/${id}`

export const getApiSessionNewLogin = () => API_LOGIN_PATH

export const getAllArticles = async () => {
  const allArticlesRequest = await axios.get(API_ARTICLES_PATH)
  return allArticlesRequest
}

export const getArticlesByUserId = async (id) => {
  return axios.get(getApiArticlesByUser(id))
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
