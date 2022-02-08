import React from 'react';
import { noLink, textCentered, roundButton, textTopCentered } from '../../styles/index.module.scss'
import { Link } from 'gatsby'

const Ocurrency = () => {
  return (
    <div className={textCentered}>
      <div className={textTopCentered}>
        <h1>Ferramenta de Auxílio para Emergências Civis</h1>
        <p>Descreva sua ocorrência</p>
      </div>
      <Link className={noLink} to="/app/ocurrency-form">
        <div className={roundButton}>
          Iniciar
        </div>
      </Link>
    </div>
  )
}

export default Ocurrency