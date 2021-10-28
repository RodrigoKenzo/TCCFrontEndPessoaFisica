import * as React from 'react'
import { Link } from 'gatsby'
import Header from '../components/Header'
import Steps from '../components/Steps'
import { noLink, textCentered, roundButton, textTopCentered } from '../styles/index.module.scss'

const HomePage = () => {
  return (
    <main>
      <Header 
        pageTitle='Site Home' 
      />
      {/*Botao para iniciar ocorrência*/}
      {/*Fazer em One-Page Style*/}
      {/*Fazer a função de mudar entre as etapas (passos)*/}
      
      <div>
        <div className={textCentered}>
          <div className={textTopCentered}>
            <h1>Ferramenta de Auxílio para Emergências Civis</h1>
            <p>Descreva sua ocorrência</p>
          </div>
          <div className={roundButton}>
            <Link className={noLink} to="/ocurrency">
              Iniciar
            </Link>
          </div>
        </div>
      </div>





      {/*Colocar highlight em qual etapa o usuário se encontra*/}


      <Steps />
    </main>
  )
}

export default HomePage