import * as React from 'react'
import { Link } from 'gatsby'
import Header from '../components/header'
import Steps from '../components/steps'
import { loginDiv, row, content, loginButton, noLink, textCentered, roundButton } from '../styles/index.module.scss'

const HomePage = () => {
  return (
    <main>

      {/*Título da página*/}

      <Header 
        pageTitle='Site Home' 
      >
        
      </Header>


      {/*Fazer DropDown no botao de login*/}


      <div className={loginDiv}>
        <div className={content}>
            <div className={row}>
              <input type="text" placeholder="Email" />
            </div>
            <div className={row}>
              <input type="password" placeholder="Senha" />
            </div>
            <div className={row}>
              <button className={loginButton} type="button"><Link className={noLink} to="/">Login</Link></button>
            </div>
        </div>
      </div>


      {/*Botao para iniciar ocorrência*/}
      {/*Fazer em One-Page Style*/}
      {/*Fazer a função de mudar entre as etapas (passos)*/}
      
      <div>
        <div className={textCentered}>
          <h1>Ferramenta de Auxílio para Emergências Civis</h1>
          <p>Descreva sua ocorrência</p>
          <div className={roundButton}>
            <Link className={noLink} to="/">
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