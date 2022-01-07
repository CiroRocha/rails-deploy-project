import { EMAIL_REGEX } from "./regexUtil"

export const emailValidation = (email) => {
  return EMAIL_REGEX.test(email)
}

export const usernameValidation = (value) => {
  return value.length >= 3
}

export const passwordValidation = (value) => {
  return value.length >= 5
}
