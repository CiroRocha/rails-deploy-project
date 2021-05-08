export const submitForm = async (
  data = {
    field: {
      value,
      validation: () => { return /* bool */ },
    }
  },
  request_method,
  request_url,
  form_authenticity_token,
  successCallback
) => {
  let hasErrors = false;

  const allErrorMessages = document.querySelectorAll('.error-message')
  allErrorMessages.forEach(error => error.classList.remove('show'))

  const dataKeys = Object.keys(data)
  for (let i = 0; i < dataKeys.length; i++) {
    const node = data[dataKeys[i]]
    if (!node.validation(node.value)) {
      hasErrors = true
      const errorMessage = document.querySelector(`.error-message.${ dataKeys[i] }`)
      if (errorMessage) errorMessage.classList.add('show')
    }
  }

  if (hasErrors) return;

  const dataValues = {}
  for (let i = 0; i < dataKeys.length; i++) {
    const node = data[dataKeys[i]]
    dataValues[dataKeys[i]] = node.value
  }

  return await fetch(request_url, {
    method: request_method,
    body: JSON.stringify({
      authenticity_token: form_authenticity_token,
      ...dataValues
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then(res => { if (successCallback != null) successCallback(res) })
};
