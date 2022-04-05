/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { createContext, useContext, useState } from "react";

export const loginContext = createContext({});

export function LoginContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();

  function login(data) {
    console.log("data", data);
    if (data.username === "rodrigo@gmail.com" && data.password === "123")
      setIsLoggedIn(true);
  }

  function logout() {
    setIsLoggedIn(false);
  }

  return (
    <loginContext.Provider
      value={{
        login,
        logout,
        isLoggedIn,
      }}
    >
      {children}
    </loginContext.Provider>
  );
}

export const useLogin = () => {
  return useContext(loginContext);
};
