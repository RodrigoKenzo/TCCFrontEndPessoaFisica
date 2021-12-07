import * as React from 'react'
import { Link } from 'gatsby'
import Header from '../components/Header'
import Steps from '../components/Steps'
import "react-responsive-combo-box/dist/index.css";
import {
  buttonBack,
  buttonRegister
} from '../styles/register.module.scss'
import { noLink, textCentered, textTopCentered, row } from '../styles/details.module.scss'
import { lastRow } from '../styles/instructions.module.scss'

const Instructions = () => {
  return (
    <main>

      <Header 
        pageTitle='Site Home' 
      >
        
      </Header>
      
      <div>
        <div className={textCentered}>
          <div className={textTopCentered}>
            <h1>Ocorrência Finalizada</h1>
            <p>Orientações Pós Ocorrência</p>
          </div>
          <div className={row}>
            <p style={{textAlign: "justify", padding: "0 30px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.</p>
          </div>
          <div className={lastRow}>
            <button className={buttonBack} type="button"><Link className={noLink} to="/details">Voltar</Link></button>
            <button className={buttonRegister} type="button"><Link className={noLink} to="/">Finalizar</Link></button>
          </div>
        </div>
      </div>
      <Steps />
    </main>
  )
}

export default Instructions