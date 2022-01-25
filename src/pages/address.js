import * as React from 'react'
import { Link } from 'gatsby'
import Header from '../components/Header'
import "react-responsive-combo-box/dist/index.css";
import {
  buttonBack,
  buttonRegister
} from '../styles/register.module.scss'
import { noLink, textCentered, textTopCentered, row, lastRow } from '../styles/address.module.scss'

const Address = () => {
  return (
    <main>

      <Header 
        pageTitle='Adress' 
      >
        
      </Header>
      
      <div>
        <div className={textCentered}>
          <div className={textTopCentered}>
            <h1>Informe sua localização?</h1>
          </div>
          <h4>Cidade</h4>
            <div className={row}>
              <input type="text" style={{width: "70%", margin: "auto", marginBottom: "20px"}} placeholder="Ex.: Atibaia" />
            </div>
            <h4>Estado</h4>
            <div className={row}>
              <input type="text" style={{width: "70%", margin: "auto", marginBottom: "20px"}} placeholder="Ex.: São Paulo" />
            </div>
            <h4>Endereço</h4>
            <div className={row}>
              <input type="text" style={{width: "70%", margin: "auto", marginBottom: "20px"}} placeholder="Ex.: Rua dos mafagafinhos" />
            </div>
            <h4>Número</h4>
            <div className={row}>
              <input type="text" style={{width: "70%", margin: "auto", marginBottom: "20px"}} placeholder="Ex.: 123" />
            </div>
            <h4>Complemento</h4>
            <div className={row}>
              <input type="text" style={{width: "70%", margin: "auto", marginBottom: "20px"}} placeholder="Ex.: Bloco C" />
            </div>
            <h4>Bairro</h4>
            <div className={row}>
              <input type="text" style={{width: "70%", margin: "auto", marginBottom: "20px"}} placeholder="Ex.: Bairro da limonada" />
            </div>
          <div className={lastRow}>
            <button className={buttonBack} type="button"><Link className={noLink} to="/ocurrency">Voltar</Link></button>
            <button className={buttonRegister} type="button"><Link className={noLink} to="/details">Não é Necessário</Link></button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Address