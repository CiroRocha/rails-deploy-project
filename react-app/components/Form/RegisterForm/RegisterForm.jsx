import React, { useState, useRef } from 'react'
import axios from 'axios'

import { getApiUserRegisterPath } from '../../../lib/requestsLib'

import { StyledRegisterForm } from './StyledRegisterForm'

import CommonButton from '../../Buttons/CommonButton/CommonButton'
import Input from '../Inputs/Input'
import { emailValidation, passwordValidation, usernameValidation } from '../../../util/validationUtil'

const RegisterForm = ({ username, email, password }) => {
  const [hasBeenSent, setHasBeenSent] = useState(false)

  const [formSendingError, setFormSendingError] = useState(null)
  const [formSendingErrorStatusCode, setFormSendingErrorStatusCode] = useState(null)

  const usernameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const submitForm = async (event) => {
    event.preventDefault()
    setHasBeenSent(true)

    const username = usernameRef.current.value
    const email = emailRef.current.value
    const password = passwordRef.current.value
    if (usernameValidation(username) && emailValidation(email) && passwordValidation(password)) {
      await axios.post(getApiUserRegisterPath(), {
        username,
        email,
        password
      })
        .then((res) => {
          console.log('success', res)
        })
        .catch((err) => {
          if (err.response) {
            const error = err.response
            setFormSendingErrorStatusCode(error.status)
            setFormSendingError(error.data)
          }
        })
    }
  }

  return (
    <StyledRegisterForm onSubmit={(event) => submitForm(event)}>
      {formSendingError && (
        <div className="sending-error">
          <h2>Sorry, we had trouble processing your request.</h2>
          {formSendingErrorStatusCode && <h4>{formSendingErrorStatusCode}</h4>}
          <p>{formSendingError}</p>
        </div>
      )}
      <Input
        type="text"
        label="Username"
        ref={usernameRef}
        inputName="username"
        formSent={hasBeenSent}
        errorMessage="Username should have 3 or more characters"
        validationFunction={usernameValidation}
        defaultValue={username}
      />
      <Input
        type="email"
        label="Email"
        ref={emailRef}
        inputName="email"
        formSent={hasBeenSent}
        errorMessage="Invalid email address"
        validationFunction={emailValidation}
        defaultValue={email}
      />
      <Input
        type="password"
        label="Password"
        ref={passwordRef}
        inputName="password"
        formSent={hasBeenSent}
        errorMessage="Password should have 5 or more characters"
        validationFunction={passwordValidation}
        defaultValue={password}
      />
      <CommonButton backgroundColor="green" type="submit">
        Submit
      </CommonButton>
    </StyledRegisterForm>
  )
}

export default RegisterForm
