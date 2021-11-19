import * as React from 'react'
import { Link } from 'gatsby'
import Header from '../components/Header'
import Steps from '../components/Steps'
import "react-responsive-combo-box/dist/index.css";
import {
  buttonBack,
  buttonRegister
} from '../styles/register.module.scss'
import { noLink, textCentered, textTopCentered, row, lastRow } from '../styles/details.module.scss'

const Details = () => {
  return (
    <main>

      <Header 
        pageTitle='Site Home' 
      >
        
      </Header>
      
      <div>
        <div className={textCentered}>
          <div className={textTopCentered}>
            <h1>Deseja dar mais detalhes?</h1>
          </div>
          <div className={row}>
            <textarea type="text" style={{width: "70%", margin: "auto", marginBottom: "20px", height: "15rem", resize: "none"}} placeholder="Mais detalhes..." />
          </div>
          <div className={lastRow}>
            <button className={buttonBack} type="button"><Link className={noLink} to="/ocurrency">Voltar</Link></button>
            <button className={buttonRegister} type="button"><Link className={noLink} to="/instructions">Não é Necessário</Link></button>
          </div>
        </div>
      </div>
      <Steps />
    </main>
  )
}

export default Details