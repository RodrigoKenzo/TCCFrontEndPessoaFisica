/* eslint-disable require-jsdoc */
import {React, createContext, useState } from "react";
import Login from "../mocks/teste.js";

const userContext = {
  name: string,
  CEP: string,
  Street: string,
  Bairro: string,
  Number: int,
  DataCadastro: string,
  CPF: string,
  Rg: string,
  Birthday: Date,
};

export const LoginContext = createContext(userContext);

export function PlayerContextProvider() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  Login.username = "roor";
  Login.password = "123";

  /* Fazer disparar a função a partir do botão de logar e comparar com os valores dos inputs */

  function login(username, password) {
    if (username === Login.username && password === Login.password) {
      setIsLoggedIn(true);
    }
  }

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export const usePlayer = () => {
  return userContext(LoginContext);
};
