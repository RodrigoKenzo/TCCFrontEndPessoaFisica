import React, { createContext, useContext, useState } from "react"

export const loginContext = createContext({})

export function LoginContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState()

  function login(data) {
    console.log('data', data)
    setIsLoggedIn(true)
  }

  function logout() {
    setIsLoggedIn(false)
  }

  return (
    <loginContext.Provider
      value={{
        login,
        logout,
        isLoggedIn
      }}
    >
      {children}
    </loginContext.Provider>
  )
}

export const useLogin = () => {
  return useContext(loginContext)
}
