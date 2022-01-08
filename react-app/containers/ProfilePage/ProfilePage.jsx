import React from 'react'
import UserArticles from '../../components/UserArticles/UserArticles'
import UserProfile from '../../components/UserProfile/UserProfile'

const ProfilePage = ({ articlesData }) => {
  return (
    <div>
      <UserProfile />
      <UserArticles articlesData={articlesData} />
    </div>
  )
}

export default ProfilePage
