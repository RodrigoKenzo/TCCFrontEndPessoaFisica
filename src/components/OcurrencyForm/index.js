import * as React from 'react'
import { Link } from 'gatsby'
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
  ocurrencyContainer,
  combobox
} from '../../styles/ocurrency.module.scss'
import { useForm } from "react-hook-form";
import { navigate } from "gatsby"

const OcurrencyForm = () => {

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    navigate('/app/localization-form')
  }

  return (
    <main>
      <div>
        <div className={textCentered}>
          <div className={textTopCentered}>
            <h1>Efetuar Ocorrência</h1>
          </div>
          <form onSubmit={(e) => {
            console.log('a')
            try {
              handleSubmit(onSubmit)
            } catch (e) {
              console.log(e)
            }
          }}>
            <div className={ocurrencyContainer}>
              <p>Tipo de Ocorrência</p>
              <select
                className={combobox}
                {...register("OcurrencyType", {required:true, maxLength:20})}
              >
                <option value="transito">Trânsito</option>
                <option value="crime">Crime</option>
                <option value="desavencaCivil">Desavença Civil</option>
                <option value="desastresNaturais">Desastres Naturais</option>
              </select>
              <p>Quantos envolvidos?</p>
              <div className={row}>
                <input 
                  type="text" 
                  style={{width: "60%", margin: "auto"}} 
                  placeholder="Nº envolvidos Ex.: 3" 
                  {...register("ManyInvolved", {required:true, maxLength:20})}
                />
              </div>
              <p>Quantas vítimas?</p>
              <div className={row}>
                <input 
                  type="text" 
                  style={{width: "60%", margin: "auto"}} 
                  placeholder="Nº vítimas Ex.: 1"
                  {...register("victims", {required:true, maxLength:20})}
                />
              </div>
              <p>Quantos feridos?</p>
              <div className={row}>
                <input 
                  type="text" 
                  style={{width: "60%"}} 
                  placeholder="Nº vítimas Ex.: 1"
                  {...register("userName", {required:true, maxLength:20})}
                />
              </div>
            </div>    
            <p>Nível de Urgência</p>
            <select
              className={combobox}
              style={{marginBottom: '20px'}}
              {...register("Urgency", {required:true, maxLength:20})}
            >
              <option value="transito">Urgente</option>
              <option value="crime">Alto</option>
              <option value="desavencaCivil">Médio</option>
              <option value="desastresNaturais">Baixo</option>
            </select>
            <div className={lastRow}>
              <button className={buttonBack} type="button"><Link className={noLink} to="/app/ocurrency">Voltar</Link></button>
              <div className={rowButton}>
                <button
                  className={buttonRegister}
                  type="submit"
                  value="Entrar"
                >
                    Próximo
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