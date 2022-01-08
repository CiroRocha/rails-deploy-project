import React, {useContext} from 'react'

import { StyledUserProfile } from './StyledUserProfile.styled'

import {UserContext } from '../../context/userContext'

const UserProfile = () => {
  const userContext = useContext(UserContext)

  return (
    <StyledUserProfile>
      <h4>{userContext.username}</h4>
      <h5>{userContext.email}</h5>
    </StyledUserProfile>
  )
}

export default UserProfile
