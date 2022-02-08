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

const HomePage = () => {

  const [page, setPage] = useState(<Ocurrency />)

  function previousPage() {
    switch(setPage()) {
      case setPage(<Ocurrency />):
        setPage(<Ocurrency />)
      break
      case setPage(<OcurrencyForm />):
        setPage(<Ocurrency />)
      break
      case setPage(<LocalizationForm />):
        setPage(<OcurrencyForm />)
      break
      case setPage(<DescriptionForm />):
        setPage(<LocalizationForm />)
      break
      case setPage(<ClosingForm />):
        setPage(<DescriptionForm />)
      break
    }
  }

  function nextPage() {
    console.log('Passou')
    switch(setPage()) {
      case setPage(<Ocurrency />):
        setPage(<OcurrencyForm />)
      break
      case setPage(<OcurrencyForm />):
        setPage(<LocalizationForm />)
      break
      case setPage(<LocalizationForm />):
        setPage(<DescriptionForm />)
      break
      case setPage(<DescriptionForm />):
        setPage(<ClosingForm />)
      break
      case setPage(<ClosingForm />):
        setPage(<Ocurrency />)
      break
    }
  }

  console.log('isLoggedIn', isLoggedIn)
  const { isLoggedIn } = useLogin()
  return (
    <main>
      <LoginContextProvider>
        <Header 
          pageTitle='Inicio' 
        />
        
          {/* {isLoggedIn? <div>{page}</div> : <UserNotFound />} */}
        <Router>
          <PrivateRoute path="/app/ocurrency" component={Ocurrency} />
          <PrivateRoute path="/app/ocurrency-form" component={OcurrencyForm} />
          <PrivateRoute path="/app/localization-form" component={LocalizationForm} />
          <PrivateRoute path="/app/description-form" component={DescriptionForm} />
          <PrivateRoute path="/app/closing-form" component={ClosingForm} />
          <Login path="/app/login" />
        </Router>
      </LoginContextProvider>
    </main>
  )
}

export default HomePage