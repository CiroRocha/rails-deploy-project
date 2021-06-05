import fieldMapping from './fieldMapping'

export const getFieldComponent = (fieldType) => {
  let Field = fieldMapping.text.component
  if (fieldMapping[fieldType]) {
    Field = fieldMapping[fieldType].component
  }

  return Field
}

export const getFieldValidationFunction = (fieldType, value, validationFunction) => {
  let fieldValidity = fieldMapping.text.defaultValidation
  if (validationFunction) {
    fieldValidity = validationFunction
  } else if (fieldMapping[fieldType]) {
    fieldValidity = fieldMapping[fieldType].defaultValidation
  }

  return fieldValidity(value)
}
