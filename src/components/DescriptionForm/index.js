import * as React from 'react'
import { Link } from 'gatsby'
import Header from '../Header'
import "react-responsive-combo-box/dist/index.css";
import {
  buttonBack,
  buttonRegister
} from '../../styles/register.module.scss'
import { noLink, textCentered, textTopCentered, row, lastRow } from '../../styles/details.module.scss'

const Details = () => {
  return (
    <main>
      <React.Fragment>
        <div className={textCentered}>
          <div className={textTopCentered}>
            <h1>Deseja dar mais detalhes?</h1>
          </div>
          <div className={row}>
            <textarea type="text" style={{width: "70%", margin: "auto", marginBottom: "20px", height: "40vh", resize: "none"}} placeholder="Mais detalhes..." />
          </div>
          <div className={lastRow}>
            <button className={buttonBack} type="button"><Link className={noLink} to="/app/localization-form">Voltar</Link></button>
            <button className={buttonRegister} type="button"><Link className={noLink} to="/app/closing-form">Não é Necessário</Link></button>
          </div>
        </div>
      </React.Fragment>
    </main>
  )
}

export default Details