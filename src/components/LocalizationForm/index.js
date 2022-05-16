import React, { useState } from 'react'
import { Link } from 'gatsby'
import "react-responsive-combo-box/dist/index.css";
import {
  buttonBack,
  buttonRegister
} from '../../styles/register.module.scss'
import { noLink, textCentered, textTopCentered, row, lastRow } from '../../styles/address.module.scss'
import { navigate } from "gatsby"

import { useFormData } from "../../contexts/formContext"

const Address = () => {

  const { formData, setFormData } = useFormData()
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [address, setAddress] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  
  const setOcurrencyData = (e) => {
    e.preventDefault()

    const data = {
      City: city,
      State: state,
      Address: address,
      Number: number,
      Complement: complement,
      Neighborhood: neighborhood
    }
    setFormData(prev => {
      return {...prev, ...data }
    })
    console.log(formData)
    navigate('/app/description-form') 
  }

  return (
    <main>
      <div>
        <form onSubmit={setOcurrencyData}>
          <div className={textCentered}>
            <div className={textTopCentered}>
              <h1>Informe sua localização?</h1>
            </div>
            <h4>Cidade</h4>
              <div className={row}>
                <input 
                  type="text" 
                  style={{width: "70%", margin: "auto", marginBottom: "20px"}} 
                  placeholder="Ex.: Atibaia"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)} 
                />
              </div>
              <h4>Estado</h4>
              <div className={row}>
                <input 
                  type="text" 
                  style={{width: "70%", margin: "auto", marginBottom: "20px"}} 
                  placeholder="Ex.: São Paulo" 
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)} 
                />
              </div>
              <h4>Endereço</h4>
              <div className={row}>
                <input 
                  type="text" 
                  style={{width: "70%", margin: "auto", marginBottom: "20px"}} 
                  placeholder="Ex.: Rua dos mafagafinhos" 
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)} 
                />
              </div>
              <h4>Número</h4>
              <div className={row}>
                <input 
                  type="text" 
                  style={{width: "70%", margin: "auto", marginBottom: "20px"}} 
                  placeholder="Ex.: 123" 
                  required
                  value={number}
                  onChange={(e) => setNumber(e.target.value)} 
                />
              </div>
              <h4>Complemento</h4>
              <div className={row}>
                <input 
                  type="text" 
                  style={{width: "70%", margin: "auto", marginBottom: "20px"}} 
                  placeholder="Ex.: Bloco C" 
                  required
                  value={complement}
                  onChange={(e) => setComplement(e.target.value)} 
                />
              </div>
              <h4>Bairro</h4>
              <div className={row}>
                <input 
                  type="text" 
                  style={{width: "70%", margin: "auto", marginBottom: "20px"}} 
                  placeholder="Ex.: Bairro da limonada" 
                  required
                  value={neighborhood}
                  onChange={(e) => setNeighborhood(e.target.value)} 
                />
              </div>
            <div className={lastRow}>
              <button className={buttonBack} type="button"><Link className={noLink} to="/app/ocurrency-form">Voltar</Link></button>
              <button className={buttonRegister} type="submit">Próximo</button>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Address