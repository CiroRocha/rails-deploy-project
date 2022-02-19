import React from 'react'
import UserForm from '../../components/Form/UserForm/UserForm'

import { StyledRegisterPage } from './StyledRegisterPage'

const RegisterPage = () => {
  return (
    <StyledRegisterPage>
      <h1>Register user</h1>
      <UserForm requestType="register" />
    </StyledRegisterPage>
  )
}

export default RegisterPage
