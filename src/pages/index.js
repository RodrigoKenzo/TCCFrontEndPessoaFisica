import * as React from 'react'
import { Link } from 'gatsby'
import Header from '../components/header'

const HomePage = () => {
  return (
    <main>
      <Header 
        pageTitle='Site Home' 
        pageHeading='Home'
      >
        
      </Header>
      <h1>Ferramenta de Auxílio para Emergências Civis</h1>
      <p>Descreva sua ocorrência</p>
      <Link to="/register">
        Login
      </Link>
    </main>
  )
}

export default HomePage