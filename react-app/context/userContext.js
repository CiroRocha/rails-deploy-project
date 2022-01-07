import React from 'react'

export const UserContext = React.createContext({
  isLoggedIn: false,
  id: -1,
  username: '',
  email: '',
})
