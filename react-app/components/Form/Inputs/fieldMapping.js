import { emailValidation, passwordValidation } from '../../../util/validationUtil'
import Email from './Email/EmailInput'
import Password from './Password/PasswordInput'
import Text from './Text/TextInput'
import TextArea from './TextArea/TextAreaInput'

const fieldMapping = {
  text: {
    component: Text,
    defaultValidation: (value) => {
      return value.length >= 1
    },
  },
  textarea: {
    component: TextArea,
    defaultValidation: (value) => {
      return value.length >= 1
    },
  },
  email: {
    component: Email,
    defaultValidation: emailValidation
  },
  password: {
    component: Password,
    defaultValidation: passwordValidation
  }
}

export default fieldMapping
