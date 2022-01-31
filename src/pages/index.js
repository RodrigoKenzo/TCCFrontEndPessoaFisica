import React, { useState, useContext } from 'react'
import Header from '../components/Header'
import UserNotFound from '../components/UserNotFound'
import Ocurrency from '../components/Ocurrency'
import OcurrencyForm from '../components/OcurrencyForm'
import LocalizationForm from '../components/LocalizationForm'
import DescriptionForm from '../components/DescriptionForm'
import ClosingForm from '../components/ClosingForm'
import { loginContext } from '../contexts/loginContext'

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

  const isLoggedIn = useContext(loginContext)
  
  const user = {
    email: "rodrigo@gmail.com",
    password: "123"
  }

  const [userLogin, setUser] = useState({email: "", password: ""})
  const [error, setError] = useState("")

  const Login = details => {
    console.log(details)

    if(details.email === user.email && details.password === user.password) {
      console.log("Logged in")
      setUser({
        email: details.email,
      })
    } else {
      console.log("Details do not match")
    }
  }

  const Logout = () => {
    console.log("Logout")
  }


  return (
    <main>
      <Header 
        pageTitle='Inicio' 
      />
      
      <button onClick={previousPage}>Back</button>
      <button onClick={nextPage}>Next</button>

      {isLoggedIn? <div>{page}</div> : <UserNotFound />}

    </main>
  )
}

export default HomePage