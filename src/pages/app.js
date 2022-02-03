import React, { useState, useContext } from 'react'
import { Router } from "@reach/router"

import Header from '../components/Header'
import UserNotFound from '../components/UserNotFound'
import Ocurrency from '../components/Ocurrency'
import OcurrencyForm from '../components/OcurrencyForm'
import LocalizationForm from '../components/LocalizationForm'
import DescriptionForm from '../components/DescriptionForm'
import ClosingForm from '../components/ClosingForm'
import Login from '../components/Login'
import PrivateRoute from '../components/PrivateRoute'


import { loginContext, LoginContextProvider, useLogin } from '../contexts/loginContext'

const App = () => {
  return (
    <main>
      <LoginContextProvider>
        <Header 
          pageTitle='Inicio' 
        />
        
        <Router basepath="/app">
          <PrivateRoute path="/ocurrency" component={Ocurrency} />
          <PrivateRoute path="/ocurrency-form" component={OcurrencyForm} />
          <UserNotFound path="/" />
        </Router>
      </LoginContextProvider>
    </main>
  )
}

export default App