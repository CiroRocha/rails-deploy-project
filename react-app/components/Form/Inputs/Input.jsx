import React, { useState, useEffect } from 'react'

import { StyledInputContainer } from './StyledInput'

import { getFieldComponent, getFieldValidationFunction } from './getComponentInfo'

const Input = React.forwardRef(
  (
    { type, label, inputName, formSent, errorMessage, validationFunction, defaultValue, ...rest },
    forwardedRef,
  ) => {
    const [inputValue, setInputValue] = useState(defaultValue || '')
    const [valid, setValid] = useState(true)

    const Input = getFieldComponent(type)

    const checkValidity = (value) => {
      setInputValue(value)
      if (!formSent) {
        return true
      }

      setValid(getFieldValidationFunction(type, value, validationFunction))
    }

    useEffect(() => {
      if (formSent) {
        checkValidity(forwardedRef.current.value)
      }
    }, [formSent])

    return (
      <StyledInputContainer className={`form-field ${inputName}`}>
        {label && (
          <label className={`form-field-label ${inputName}`} htmlFor={`input-text-${inputName}`}>
            {label}
          </label>
        )}
        <Input
          inputName={inputName}
          ref={forwardedRef}
          value={inputValue}
          onChange={(event) => checkValidity(event.target.value)}
          {...rest}
        />
        {!valid && (
          <small className="error-message">
            {errorMessage || `Invalid ${label.toLowerCase()} provided`}
          </small>
        )}
      </StyledInputContainer>
    )
  },
)

export default Input
