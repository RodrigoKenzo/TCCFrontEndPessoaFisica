import * as React from 'react'
import { Link } from 'gatsby'
import Header from '../components/header'
import Steps from '../components/steps'
import "react-responsive-combo-box/dist/index.css";
import { noLink, textCentered, textTopCentered, row, buttonSim, buttonNao } from '../styles/details.module.scss'

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
          <p>&zwnj; </p>
          <p>&zwnj; </p>
          <p>&zwnj; </p>
          <p>&zwnj; </p>
          <div className={row}>
            <textarea type="text" style={{width: "70%", margin: "auto", marginBottom: "20px", height: "15rem"}} placeholder="Mais detalhes..." />
          </div>
          <div className={row}>
            <button className={buttonNao} type="button"><Link className={noLink} to="/ocurrency">Voltar</Link></button>
            <button className={buttonSim} type="button"><Link className={noLink} to="/">Não é Necessário</Link></button>
          </div>
        </div>
      </div>
      <Steps />
    </main>
  )
}

export default Details