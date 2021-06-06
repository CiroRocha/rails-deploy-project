import React, { useState, useRef } from 'react'
import axios from 'axios'

import { useRouter } from 'next/router'

import {
  getApiArticlesPath,
  getFrontendArticlesPath,
  buildFrontendArticlePathWithId,
} from '../../../lib/requestsLib'

import { StyledArticleForm } from './StyledArticleForm'

import Input from '../Inputs/Input'

const Form = () => {
  const [hasBeenSent, setHasBeenSent] = useState(false)

  const [formSendingError, setFormSendingError] = useState(null)
  const [formSendingErrorStatusCode, setFormSendingErrorStatusCode] = useState(null)

  const titleRef = useRef(null)
  const descriptionRef = useRef(null)

  const router = useRouter()

  const titleValidation = (value) => {
    return value.length >= 10
  }

  const descriptionValidation = (value) => {
    return value.length >= 50
  }

  const submitForm = async (event) => {
    event.preventDefault()
    setHasBeenSent(true)

    const title = titleRef.current.value
    const description = descriptionRef.current.value
    if (titleValidation(title) && descriptionValidation(description)) {
      await axios
        .post(getApiArticlesPath(), {
          title,
          description,
        })
        .then((res) => {
          if (res.status === 201 && res.data.id) {
            router.push(buildFrontendArticlePathWithId(res.data.id))
          } else {
            router.push(getFrontendArticlesPath())
          }
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
    <StyledArticleForm onSubmit={(event) => submitForm(event)}>
      {formSendingError && (
        <div className="sending-error">
          <h2>Sorry, we had trouble processing your request.</h2>
          {formSendingErrorStatusCode && <h4>{formSendingErrorStatusCode}</h4>}
          <p>{formSendingError}</p>
        </div>
      )}
      <Input
        type="text"
        label="Title"
        ref={titleRef}
        inputName="title"
        formSent={hasBeenSent}
        errorMessage="Title should have 10 or more characters"
        validationFunction={titleValidation}
      />
      <Input
        type="textarea"
        label="Description"
        ref={descriptionRef}
        inputName="description"
        formSent={hasBeenSent}
        errorMessage="Description should have 50 or more characters"
        validationFunction={descriptionValidation}
      />
      <button type="submit">Submit</button>
    </StyledArticleForm>
  )
}

export default Form
