import React from 'react'

const PasswordInput = React.forwardRef(({ inputName, ...rest }, forwardedRef) => {
  return (
    <input
      ref={forwardedRef}
      type="password"
      name={inputName}
      className={`form-field-input ${inputName}`}
      id={`input-text-${inputName}`}
      aria-labelledby={`Input for ${inputName}`}
      {...rest}
    />
  )
})

export default PasswordInput
