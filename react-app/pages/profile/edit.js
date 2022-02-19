import React, { useContext } from 'react'
import UserForm from '../../components/Form/UserForm/UserForm'

import { UserContext } from '../../context/userContext'

const EditProfile = () => {
  const userContext = useContext(UserContext)

  return (
    <div>
      <h1>Edit</h1>
      <UserForm
        id={userContext?.id}
        username={userContext?.username}
        email={userContext?.email}
        requestType="edit"
      />
    </div>
  )
}

export default EditProfile
