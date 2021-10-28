import * as React from 'react'
import { Link } from 'gatsby'
import Header from '../components/Header'
import Steps from '../components/Steps'
import ComboBox from "react-responsive-combo-box";
import "react-responsive-combo-box/dist/index.css";
import { noLink, textCentered, textTopCentered, row, buttonSim, buttonNao } from '../styles/ocurrency.module.scss'

const Ocurrency = () => {

    const ocurrencyType = [
        "Ameaça",
        "Estelionato",
        "Roubo ou furto a estabelecimento comercial",
        "Roubo ou furto a residência",
        "Roubo ou furto de carga",
        "Crimes contra o consumidor",
        "Furto",
        "Injúria",
        "Difamação",
        "Calúnia",
        "Desaparecimento"
      ];

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
          <p>&zwnj; </p>
          <p>&zwnj; </p>
          <p>&zwnj; </p>
          <p>&zwnj; </p>
          <p>Tipo de Ocorrência</p>
          <ComboBox
            options={ocurrencyType}
            placeholder="Escolha uma opção"
            defaultIndex={4}
            optionsListMaxHeight={150}
            style={{
            width: "60%",
            margin: "0 auto"
            }}
            focusColor="#20C374"
            renderOptions={(option) => (
            <div className="comboBoxOption">{option}</div>
            )}
            onChange={(event) => console.log(event.target.value)}
            enableAutocomplete
          />
          <p>Houve vítimas?</p>
          <div className={row}>
            <button className={buttonSim} type="button"><Link className={noLink}>Sim</Link></button>
            <button className={buttonNao} type="button"><Link className={noLink}>Não</Link></button>
          </div>
          <p>Quantos envolvidos?</p>
          <div className={row}>
            <input type="text" style={{width: "60%", margin: "auto", marginBottom: "20px"}} placeholder="Nº envolvidos Ex.: 3" />
          </div>
          <div className={row}>
            <button className={buttonNao} type="button"><Link className={noLink} to="/">Voltar</Link></button>
            <button className={buttonSim} type="button"><Link className={noLink} to="/details">Prosseguir</Link></button>
          </div>
        </div>
      </div>
      <Steps />
    </main>
  )
}

export default Ocurrency