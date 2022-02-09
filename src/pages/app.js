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


import { loginContext, LoginContextProvider, useLogin, isLoggedIn } from '../contexts/loginContext'

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
          <PrivateRoute path="/localization-form" component={LocalizationForm} />
          <PrivateRoute path="/description-form" component={DescriptionForm} />
          <PrivateRoute path="/closing-form" component={ClosingForm} />
        </Router>
        {!isLoggedIn &&
            <UserNotFound />
        }
      </LoginContextProvider>
    </main>
  )
}

export default App