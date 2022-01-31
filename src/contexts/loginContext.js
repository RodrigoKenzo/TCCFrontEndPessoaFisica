import { React, createContext, useContext, useState } from "react"

export const loginContext = createContext(loginContext)

export function LoginContextProvider() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function login() {
    setIsLoggedIn(true)
  }

  function logout() {
    setIsLoggedIn(false)
  }

  return (
    <LoginContext.Provider
      value={{
        login,
        logout
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}

export const useLogin = () => {
  return useContext(loginContext)
}
