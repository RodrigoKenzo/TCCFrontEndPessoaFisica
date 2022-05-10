import React from 'react'
import { Router } from "@reach/router"

import Header from '../components/Header'
import Ocurrency from '../components/Ocurrency'
import OcurrencyForm from '../components/OcurrencyForm'
import LocalizationForm from '../components/LocalizationForm'
import DescriptionForm from '../components/DescriptionForm'
import PrivateRoute from '../components/PrivateRoute'


import { LoginContextProvider } from '../contexts/loginContext'
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
          </Router>
        </FormContextProvider>
      </LoginContextProvider>
    </main>
  )
}

export default App