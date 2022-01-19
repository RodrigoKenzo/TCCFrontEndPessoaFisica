import * as React from 'react'
import { Link } from 'gatsby'
import Header from '../components/Header'
import ComboBox from "react-responsive-combo-box";
import "react-responsive-combo-box/dist/index.css";
import {
  buttonBack,
  buttonRegister
} from '../styles/register.module.scss'
import { 
  noLink,
  textCentered,
  textTopCentered,
  row,
  lastRow,
  buttonSim,
  buttonNao,
  ocurrencyContainer
} from '../styles/ocurrency.module.scss'

const Ocurrency = () => {

  const ocurrencyType = [
    "Acidente de trânsito",
    "Crime",
    "Desavença Civil",
    "Desastres Naturais"
  ]

  const urgencyType = [
    "Urgente",
    "Alto",
    "Médio",
    "Baixo"
  ]

  return (
    <main>

      <Header 
        pageTitle='Site Home' 
      >
      </Header>
      
      <div>
        <div className={textCentered}>
          <div className={textTopCentered}>
            <h1>Efetuar Ocorrência</h1>
          </div>
          <div className={ocurrencyContainer}>
            <p>Tipo de Ocorrência</p>
            <ComboBox
              options={ocurrencyType}
              placeholder="Escolha uma opção"
              defaultIndex={4}
              optionsListMaxHeight={150}
              style={{
              width: "60%",
              margin: "0 auto",
              color: "black"
              }}
              focusColor="#20C374"
              renderOptions={(option) => (
              <div className="comboBoxOption">{option}</div>
              )}
              onChange={(event) => console.log(event.target.value)}
              enableAutocomplete
            />
            <p>Quantos envolvidos?</p>
            <div className={row}>
              <input type="text" style={{width: "60%", margin: "auto"}} placeholder="Nº envolvidos Ex.: 3" />
            </div>
            <p>Houve vítimas?</p>
            <div className={row}>
              <button className={buttonSim} type="button"><Link className={noLink}>Sim</Link></button>
              <button className={buttonNao} type="button"><Link className={noLink}>Não</Link></button>
            </div>
            <p>Quantas vítimas?</p>
            <div className={row}>
              <input type="text" style={{width: "60%", margin: "auto"}} placeholder="Nº vítimas Ex.: 1" />
            </div>
            <p>Houve feridos?</p>
            <div className={row}>
              <button className={buttonSim} type="button"><Link className={noLink}>Sim</Link></button>
              <button className={buttonNao} type="button"><Link className={noLink}>Não</Link></button>
            </div>
            <p>Quantos feridos?</p>
            <div className={row}>
              <input type="text" style={{width: "60%", margin: "auto"}} placeholder="Nº vítimas Ex.: 1" />
            </div>
          </div>       
          <div className={lastRow}>
            <button className={buttonBack} type="button"><Link className={noLink} to="/">Voltar</Link></button>
            <button className={buttonRegister} type="button"><Link className={noLink} to="/address">Prosseguir</Link></button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Ocurrency