import * as React from 'react'
import { Link } from 'gatsby'
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
  ocurrencyContainer,
  combobox
} from '../../styles/ocurrency.module.scss'
import { useForm } from "react-hook-form";
import { navigate } from "gatsby"
import { useFormData } from "../../contexts/formContext"

const OcurrencyForm = () => {

  const { register, handleSubmit } = useForm();
  const { setFormData } = useFormData()
  

  const onSubmit = (data) => {
    setFormData(data)
    navigate('/app/localization-form')
  }

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
                  {...register("Victims", {required:true, maxLength:20})}
                />
              </div>
            </div>    
            <p>Nível de Urgência</p>
            <select
              className={combobox}
              style={{marginBottom: '20px'}}
              {...register("Urgency", {required:true, maxLength:20})}
            >
              <option value="Urgente">Urgente</option>
              <option value="Alto">Alto</option>
              <option value="Médio">Médio</option>
              <option value="Baixo">Baixo</option>
            </select>
            <div className={lastRow}>
              <button className={buttonBack} type="button"><Link className={noLink} to="/app/ocurrency">Voltar</Link></button>
              <button
                className={buttonRegister}
                type="submit"
                value="Entrar"
              >
                  Próximo
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default OcurrencyForm