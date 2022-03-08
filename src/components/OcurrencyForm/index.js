import * as React from 'react'
import { Link } from 'gatsby'
import Header from '../Header'
import ComboBox from "react-responsive-combo-box";
import "react-responsive-combo-box/dist/index.css";
import {
  buttonBack,
  buttonRegister
} from '../../styles/register.module.scss'
import { 
  noLink,
  textCentered,
  textTopCentered,
  row,
  lastRow,
  rowButton,
  buttonSim,
  buttonNao,
  ocurrencyContainer
} from '../../styles/ocurrency.module.scss'
import { useForm } from "react-hook-form";

const OcurrencyForm = () => {

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("a")
    newRegister(data)
  }

  const ocurrencyType = [
    "Trânsito",
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
      <div>
        <div className={textCentered}>
          <div className={textTopCentered}>
            <h1>Efetuar Ocorrência</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                {...register("OcurrencyType", {required:true, maxLength:20})}
              />
              <p>Quantos envolvidos?</p>
              <div className={row}>
                <input 
                  type="text" 
                  style={{width: "60%", margin: "auto"}} 
                  placeholder="Nº envolvidos Ex.: 3" 
                />
              </div>
              <p>Houve vítimas?</p>
              <div className={row}>
                <button className={buttonSim} type="button"><Link className={noLink}>Sim</Link></button>
                <button className={buttonNao} type="button"><Link className={noLink}>Não</Link></button>
              </div>
              <p>Quantas vítimas?</p>
              <div className={row}>
                <input 
                  type="text" 
                  style={{width: "60%", margin: "auto"}} 
                  placeholder="Nº vítimas Ex.: 1"
                  {...register("Victims", {required:true, maxLength:20})}
                />
              </div>
              <p>Houve feridos?</p>
              <div className={row}>
                <button className={buttonSim} type="button"><Link className={noLink}>Sim</Link></button>
                <button className={buttonNao} type="button"><Link className={noLink}>Não</Link></button>
              </div>
              <p>Quantos feridos?</p>
              <div className={row}>
                <input 
                  type="text" 
                  style={{width: "60%", margin: "auto"}} 
                  placeholder="Nº vítimas Ex.: 1"
                  {...register("userName", {required:true, maxLength:20})}
                />
              </div>
            </div>    
            <ComboBox
                options={urgencyType}
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
            <div className={lastRow}>
              <button className={buttonBack} type="button"><Link className={noLink} to="/app/ocurrency">Voltar</Link></button>
              <div className={rowButton}>
                <button
                  className={buttonRegister}
                  type="submit"
                  value="Entrar"
                >
                  <Link className={noLink} to="/app/localization-form">
                    Próximo
                  </Link>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default OcurrencyForm