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
}

export default fieldMapping
