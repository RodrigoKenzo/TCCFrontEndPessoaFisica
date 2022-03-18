import * as React from 'react'
import { Link } from 'gatsby'
import "react-responsive-combo-box/dist/index.css";
import {
  buttonBack,
  buttonRegister
} from '../../styles/register.module.scss'
import { noLink, textCentered, textTopCentered, row, lastRow } from '../../styles/address.module.scss'
import { useForm } from "react-hook-form";
import { navigate } from "gatsby"

import { useFormData } from "../../contexts/formContext"

const Address = () => {

  const { register, handleSubmit } = useForm();
  const { formData, setFormData } = useFormData()
  const onSubmit = (data) => {
    setFormData(prev => {
      return {...prev, ...data }
    })
    console.log(formData)
    navigate('/app/description-form') 
  }

  return (
    <main>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={textCentered}>
            <div className={textTopCentered}>
              <h1>Informe sua localização?</h1>
            </div>
            <h4>Cidade</h4>
              <div className={row}>
                <input type="text" style={{width: "70%", margin: "auto", marginBottom: "20px"}} placeholder="Ex.: Atibaia" {...register("City", {required:true, maxLength:20})} />
              </div>
              <h4>Estado</h4>
              <div className={row}>
                <input type="text" style={{width: "70%", margin: "auto", marginBottom: "20px"}} placeholder="Ex.: São Paulo" {...register("State", {required:true, maxLength:20})} />
              </div>
              <h4>Endereço</h4>
              <div className={row}>
                <input type="text" style={{width: "70%", margin: "auto", marginBottom: "20px"}} placeholder="Ex.: Rua dos mafagafinhos" {...register("Adress", {required:true, maxLength:20})} />
              </div>
              <h4>Número</h4>
              <div className={row}>
                <input type="text" style={{width: "70%", margin: "auto", marginBottom: "20px"}} placeholder="Ex.: 123" {...register("Number", {required:true, maxLength:20})} />
              </div>
              <h4>Complemento</h4>
              <div className={row}>
                <input type="text" style={{width: "70%", margin: "auto", marginBottom: "20px"}} placeholder="Ex.: Bloco C" {...register("Complement", {required:true, maxLength:20})} />
              </div>
              <h4>Bairro</h4>
              <div className={row}>
                <input type="text" style={{width: "70%", margin: "auto", marginBottom: "20px"}} placeholder="Ex.: Bairro da limonada" {...register("Neighborhood", {required:true, maxLength:20})} />
              </div>
            <div className={lastRow}>
              <button className={buttonBack} type="button"><Link className={noLink} to="/app/ocurrency-form">Voltar</Link></button>
              <button className={buttonRegister} type="submit">Não é Necessário</button>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Address