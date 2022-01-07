import React from 'react'
import RegisterForm from '../../components/Form/RegisterForm/RegisterForm'

import {StyledRegisterPage} from './StyledRegisterPage'

const RegisterPage = () => {
  return (
    <StyledRegisterPage>
      <h1>Register user</h1>
      <RegisterForm />
    </StyledRegisterPage>
  )
}

export default RegisterPage
