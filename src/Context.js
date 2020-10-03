import React, { createContext, useContext, useState } from 'react'

const Context = createContext()

export const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })

  const changeIsAuth = (token) => {
    setIsAuth(true)
    window.sessionStorage.setItem('token', token)
  }

  const changeIsLogout = () => {
    setIsAuth(false)
    window.sessionStorage.removeItem('token')
  }
  const initialValue = {
    isAuth,
    changeIsAuth,
    changeIsLogout
  }
  return (
    <Context.Provider value={initialValue}>
      {children}
    </Context.Provider>
  )
}

export const useStateValue = () => useContext(Context)
