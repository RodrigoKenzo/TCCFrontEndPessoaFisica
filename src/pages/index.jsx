import React from 'react'
import { Router } from "@reach/router"

import Header from '../components/Header'
import Ocurrency from '../components/Ocurrency'
import OcurrencyForm from '../components/OcurrencyForm'
import LocalizationForm from '../components/LocalizationForm'
import DescriptionForm from '../components/DescriptionForm'
import ClosingForm from '../components/ClosingForm'
import Login from '../components/Login'
import PrivateRoute from '../components/PrivateRoute'


import { LoginContextProvider } from '../contexts/loginContext'
import { FormContextProvider } from '../contexts/formContext'

const HomePage = () => {

  return (
    <main>
      <LoginContextProvider>
          <FormContextProvider>
        <Header 
          pageTitle='Inicio' 
        />
        <Router>
          <PrivateRoute path="/app/ocurrency" component={Ocurrency} />
            <PrivateRoute path="/app/ocurrency-form" component={OcurrencyForm} />
            <PrivateRoute path="/app/localization-form" component={LocalizationForm} />
            <PrivateRoute path="/app/description-form" component={DescriptionForm} />
            <PrivateRoute path="/app/closing-form" component={ClosingForm} />
          <Login path="/app/login" />
        </Router>
          </FormContextProvider>
      </LoginContextProvider>
    </main>
  )
}

export default HomePage