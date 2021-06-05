import React from 'react'

const TextInput = React.forwardRef(({ inputName, ...rest }, forwardedRef) => {
  return (
    <textarea
      ref={forwardedRef}
      name={inputName}
      className={`form-field-input ${inputName}`}
      id={`input-text-${inputName}`}
      aria-labelledby={`Input for ${inputName}`}
      {...rest}
    />
  )
})

export default TextInput
