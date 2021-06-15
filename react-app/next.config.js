const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants')

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'

  const FRONTEND_PATH = 'FRONTEND_PATH'
  const BACKEND_PATH = 'BACKEND_PATH'

  const env = {}

  if (isDev) {
    env[FRONTEND_PATH] = 'http://localhost:3000'
    env[BACKEND_PATH] = 'http://localhost:8000'
  }

  if (isProd) {
    env[FRONTEND_PATH] = 'https://rails-deploy-project.vercel.app'
    env[BACKEND_PATH] = 'https://afternoon-dawn-91805.herokuapp.com'
  }

  return {
    env,
  }
}
