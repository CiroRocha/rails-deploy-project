import React, { useState, useRef } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

import {
  getApiSessionNewLogin,
  getApiUserRegisterPath,
  getApiUserUpdatePath,
} from '../../../lib/requestsLib'

import { StyledUserForm } from './StyledUserForm'

import CommonButton from '../../Buttons/CommonButton/CommonButton'
import Input from '../Inputs/Input'
import {
  emailValidation,
  passwordValidation,
  usernameValidation,
} from '../../../util/validationUtil'

const UserForm = ({ id, defaultUsername, defaultEmail, defaaultPassword, requestType }) => {
  const [hasBeenSent, setHasBeenSent] = useState(false)

  const [formSendingError, setFormSendingError] = useState(null)
  const [formSendingErrorStatusCode, setFormSendingErrorStatusCode] = useState(null)

  const usernameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const isLogin = () => requestType === 'login'

  const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: '/',
  })

  const requestMethod = (data) => {
    switch (requestType) {
      case 'login':
        return axiosInstance.post(getApiSessionNewLogin(), data)

      case 'register':
        return axios.post(getApiUserRegisterPath(), data)

      case 'edit':
        return axios.put(getApiUserUpdatePath(id), data)

      default:
        return axios.get()
    }
  }

  const submitForm = async (event) => {
    event.preventDefault()
    setHasBeenSent(true)

    const email = emailRef.current.value
    const password = id ? null : passwordRef.current.value
    const data = {
      id,
      email,
    }

    let isValidUsername = true
    if (!isLogin()) {
      const username = usernameRef.current.value
      data['username'] = username
      isValidUsername = usernameValidation(username)
    }

    if (id) {
      data.id = id
    } else {
      data.password = password
    }

    if (isValidUsername && emailValidation(email) && (id || passwordValidation(password))) {
      await requestMethod(data)
        .then((res) => {
          console.log('success', res)
          // if (isLogin() && document) {
          //   const expireDate = new Date()
          //   expireDate.setDate(expireDate.getDate() + 3)
          //   document.cookie = `sessionToken=${res.data.sessionToken}; expires=${expireDate.toUTCString()}`
          // }
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
    <StyledUserForm onSubmit={(event) => submitForm(event)}>
      {formSendingError && (
        <div className="sending-error">
          <h2>Sorry, we had trouble processing your request.</h2>
          {formSendingErrorStatusCode && <h4>{formSendingErrorStatusCode}</h4>}
          <p>{formSendingError}</p>
        </div>
      )}
      {!isLogin() && (
        <Input
          type="text"
          label="Username"
          ref={usernameRef}
          inputName="username"
          formSent={hasBeenSent}
          errorMessage="Username should have 3 or more characters"
          validationFunction={usernameValidation}
          defaultValue={defaultUsername}
        />
      )}
      <Input
        type="email"
        label="Email"
        ref={emailRef}
        inputName="email"
        formSent={hasBeenSent}
        errorMessage="Invalid email address"
        validationFunction={emailValidation}
        defaultValue={defaultEmail}
      />
      {!id && (
        <Input
          type="password"
          label="Password"
          ref={passwordRef}
          inputName="password"
          formSent={hasBeenSent}
          errorMessage="Password should have 5 or more characters"
          validationFunction={passwordValidation}
          defaultValue={defaaultPassword}
        />
      )}
      <CommonButton backgroundColor="green" type="submit">
        Submit
      </CommonButton>
    </StyledUserForm>
  )
}

UserForm.propTypes = {
  requestType: PropTypes.oneOf(['register', 'edit', 'login']),
}

export default UserForm
