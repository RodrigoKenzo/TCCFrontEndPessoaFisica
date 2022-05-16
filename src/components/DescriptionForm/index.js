import * as React from 'react'
import { Link } from 'gatsby'
import "react-responsive-combo-box/dist/index.css";
import {
  buttonBack,
  buttonRegister
} from '../../styles/register.module.scss'
import { noLink, textCentered, textTopCentered, row, lastRow } from '../../styles/details.module.scss'
import { useForm } from "react-hook-form";
import { navigate } from "gatsby"

import { useFormData } from "../../contexts/formContext"
import newOcurrency from '../../services/ocurrency'

const Details = () => {

  const { register, handleSubmit } = useForm();
  const { formData, setFormData } = useFormData()

  const onSubmit = (data) => {
    setFormData(prev => {
      return {...prev, ...data }
    })
    console.log('data', data)
    console.log('último', formData)
    newOcurrency(formData)
    navigate('/app/ocurrency') 
  }

  return (
    <main>
      <React.Fragment>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={textCentered}>
            <div className={textTopCentered}>
              <h1>Deseja dar mais detalhes?</h1>
              <p>(opcional)</p>
            </div>
            <div className={row}>
              <textarea type="text" style={{width: "70%", margin: "auto", marginBottom: "20px", height: "40vh", resize: "none"}} placeholder="Mais detalhes..." {...register("Details", {required:false, maxLength:20})} />
            </div>
            <div className={lastRow}>
              <button className={buttonBack} type="button"><Link className={noLink} to="/app/localization-form">Voltar</Link></button>
              <button className={buttonRegister} type="submit">Finalizar</button>
            </div>
          </div>
        </form>
      </React.Fragment>
    </main>
  )
}

export default Details