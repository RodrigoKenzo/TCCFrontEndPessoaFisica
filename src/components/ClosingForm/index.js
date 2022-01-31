import * as React from 'react'
import { Link } from 'gatsby'
import Header from '../Header'
import "react-responsive-combo-box/dist/index.css";
import {
  buttonBack,
  buttonRegister
} from '../../styles/register.module.scss'
import { noLink, textCentered, textTopCentered, row } from '../../styles/details.module.scss'
import { lastRow, ocurrencyStatus, status1, status2, status3 } from '../../styles/instructions.module.scss'

const Instructions = () => {
  return (
    <main>
      <React.Fragment>
        <div className={textCentered}>
          <div className={textTopCentered}>
            <h1>Ocorrência Finalizada</h1>
            <p>Orientações Pós Ocorrência</p>
          </div>
          <div className={row}>
            <p style={{textAlign: "justify", padding: "0 30px"}}>Você será atendido em breve, aguarde o profissional chegar ao local, se possível mantenha-se afastado da ocorrência, e sinalize em volta.</p>
          </div>
          <div className={ocurrencyStatus}>
            <div className={status1}>
              Enviado
            </div>
            <div className={status2}>
              Recebido
            </div>
            <div className={status3}>
              Atendido
            </div>
          </div>
          <div className={lastRow}>
            <button className={buttonBack} type="button"><Link className={noLink} to="/details">Voltar</Link></button>
            <button className={buttonRegister} type="button"><Link className={noLink} to="/">Finalizar</Link></button>
          </div>
        </div>
      </React.Fragment>
    </main>
  )
}

export default Instructions