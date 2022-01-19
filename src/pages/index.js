import * as React from 'react'
import { Link } from 'gatsby'
import Header from '../components/Header'
import { noLink, textCentered, roundButton, textTopCentered } from '../styles/index.module.scss'

const HomePage = () => {
  return (
    <main>
      <Header 
        pageTitle='Inicio' 
      />

      {/*
      Criação dos campos das ocorrências genéricas
      Adicionar na página de instructions se a ocorrência foi atendida ou não
      */}
      
      <div>
        <div className={textCentered}>
          <div className={textTopCentered}>
            <h1>Ferramenta de Auxílio para Emergências Civis</h1>
            <p>Descreva sua ocorrência</p>
          </div>
          <Link className={noLink} to="/ocurrency">
            <div className={roundButton}>
              Iniciar
            </div>
          </Link>
        </div>
      </div>





      {/*Colocar highlight em qual etapa o usuário se encontra*/}


    </main>
  )
}

export default HomePage