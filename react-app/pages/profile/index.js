import { useState, useContext, useEffect } from 'react'

import { getArticlesByUserId } from '../../lib/requestsLib'
import { UserContext } from '../../context/userContext'

import Spinner from '../../components/Spinner/Spinner'
import ProfilePage from '../../containers/ProfilePage/ProfilePage'

const UserProfile = () => {
  const userContext = useContext(UserContext)

  const [fetchedArticles, setFetchedArticles] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(async () => {
    await getArticlesByUserId(userContext.id)
      .then(res => {
        setFetchedArticles(res.data.userArticles)
        console.log(res)
      })
      .catch(err => {
        setFetchedArticles(null)
        console.log(err)
      })
      .finally(() => {
        setIsLoaded(true)
      })
  }, [])

  return (
    <div>
      {
        isLoaded ?
          fetchedArticles ?
            <ProfilePage articlesData={fetchedArticles} />
          : 'Error'
        : <Spinner />
      }
    </div>
  )
}

export default UserProfile
