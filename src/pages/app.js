import React, { useState, useContext } from 'react'
import { Router } from "@reach/router"

import Header from '../components/Header'
import UserNotFound from '../components/UserNotFound'
import Ocurrency from '../components/Ocurrency'
import OcurrencyForm from '../components/OcurrencyForm'
import LocalizationForm from '../components/LocalizationForm'
import DescriptionForm from '../components/DescriptionForm'
import ClosingForm from '../components/ClosingForm'
import PrivateRoute from '../components/PrivateRoute'


import { LoginContextProvider, isLoggedIn } from '../contexts/loginContext'
import { FormContextProvider } from '../contexts/formContext'

const App = () => {
  return (
    <main>
      <LoginContextProvider>
        <Header 
          pageTitle='Inicio' 
        />
        <FormContextProvider>
          <Router basepath="/app">
            <PrivateRoute path="/ocurrency" component={Ocurrency} />
            <PrivateRoute path="/ocurrency-form" component={OcurrencyForm} />
            <PrivateRoute path="/localization-form" component={LocalizationForm} />
            <PrivateRoute path="/description-form" component={DescriptionForm} />
            <PrivateRoute path="/closing-form" component={ClosingForm} />
          </Router>
        </FormContextProvider>
      </LoginContextProvider>
    </main>
  )
}

export default App