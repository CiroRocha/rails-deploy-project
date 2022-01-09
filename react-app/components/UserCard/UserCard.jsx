import React from 'react'

import { UserCardContainer } from './StyledUserCard.styled'

const UserCard = ({ userData }) => {
  return (
    <UserCardContainer>
      <h4>{userData.username}</h4>
      <h5>{userData.email}</h5>
    </UserCardContainer>
  )
}

export default UserCard
