import React from 'react'

const EmailInput = React.forwardRef(({ inputName, ...rest }, forwardedRef) => {
  return (
    <input
      ref={forwardedRef}
      type="email"
      name={inputName}
      className={`form-field-input ${inputName}`}
      id={`input-text-${inputName}`}
      aria-labelledby={`Input for ${inputName}`}
      {...rest}
    />
  )
})

export default EmailInput
