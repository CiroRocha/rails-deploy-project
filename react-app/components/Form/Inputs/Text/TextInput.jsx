import React from 'react'

const TextInput = React.forwardRef(({ inputName, ...rest }, forwardedRef) => {
  return (
    <input
      ref={forwardedRef}
      type="text"
      name={inputName}
      className={`form-field-input ${inputName}`}
      id={`input-text-${inputName}`}
      aria-labelledby={`Input for ${inputName}`}
      {...rest}
    />
  )
})

export default TextInput
