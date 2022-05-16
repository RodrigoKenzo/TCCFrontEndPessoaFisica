import React, { useState } from 'react'
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
import { navigate } from "gatsby"
import { useFormData } from "../../contexts/formContext"

const OcurrencyForm = () => {

  const { setFormData } = useFormData()
  const [ocurrencyType, setOcurrencyType] = useState('Trânsito')
  const [manyInvolved, setManyInvolved] = useState('')
  const [victims, setVictims] = useState('')
  const [urgency, setUrgency] = useState('Urgente')
  

  const setOcurrencyData = (e) => {
    e.preventDefault()

    const data = {
      OcurrencyType: ocurrencyType,
      ManyInvolved: manyInvolved,
      Victims: victims,
      Urgency: urgency
    }
    setFormData(data)
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
          <form onSubmit={setOcurrencyData}>
            <div className={ocurrencyContainer}>
              <p>Tipo de Ocorrência</p>
              <select
                className={combobox}
                required
                value={ocurrencyType}
                onChange={(e) => setOcurrencyType(e.target.value)}
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
                  required
                  value={manyInvolved}
                  onChange={(e) => setManyInvolved(e.target.value)}
                />
              </div>
              <p>Quantas vítimas?</p>
              <div className={row}>
                <input 
                  type="text" 
                  style={{width: "60%", margin: "auto"}} 
                  placeholder="Nº vítimas Ex.: 1"
                  required
                  value={victims}
                  onChange={(e) => setVictims(e.target.value)}
                />
              </div>
            </div>    
            <p>Nível de Urgência</p>
            <select
              className={combobox}
              style={{marginBottom: '20px'}}
              required
              value={urgency}
              onChange={(e) => setUrgency(e.target.value)}
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