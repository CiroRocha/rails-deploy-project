import React, { useContext } from 'react'
import RegisterForm from '../../components/Form/RegisterForm/RegisterForm'

import { UserContext } from '../../context/userContext'

const EditProfile = () => {
  const userContext = useContext(UserContext)

  return (
    <div>
      <h1>Edit</h1>
      <RegisterForm
        id={userContext?.id}
        username={userContext?.username}
        email={userContext?.email}
      />
    </div>
  )
}

export default EditProfile
