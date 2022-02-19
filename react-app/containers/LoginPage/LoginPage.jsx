import React from 'react'
import UserForm from '../../components/Form/UserForm/UserForm'

import { StyledLoginPage } from './StyledLoginPage'

const RegisterPage = () => {
  return (
    <StyledLoginPage>
      <h1>Login</h1>
      <UserForm requestType="login" />
    </StyledLoginPage>
  )
}

export default RegisterPage
