import * as React from 'react'
import { Link } from 'gatsby'
import "react-responsive-combo-box/dist/index.css";
import {
  buttonBack,
  buttonRegister
} from '../../styles/register.module.scss'
import { noLink, textCentered, textTopCentered, row } from '../../styles/details.module.scss'
import { lastRow, ocurrencyStatus, status1, status2, status3 } from '../../styles/instructions.module.scss'
import { useForm } from "react-hook-form";

import newOcurrency from '../../services/ocurrency'

const Instructions = () => {

  const { handleSubmit } = useForm();
  const onSubmit = newOcurrency();

  return (
    <main>
      <React.Fragment>
        <div className={textCentered}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={textTopCentered}>
              <h1>Ocorrência Finalizada</h1>
              <p>Orientações Pós Ocorrência</p>
            </div>
            <div className={row}>
              <p style={{textAlign: "justify", padding: "0 30px"}}>Você será atendido em breve, aguarde o profissional chegar ao local, se possível mantenha-se afastado da ocorrência, e sinalize em volta.</p>
            </div>
            <div className={ocurrencyStatus}>
              <div className={status1}>
                Enviado
              </div>
              <div className={status2}>
                Recebido
              </div>
              <div className={status3}>
                Atendido
              </div>
            </div>
            <div className={lastRow}>
              <button className={buttonBack} type="button"><Link className={noLink} to="/app/description-form">Voltar</Link></button>
              <button className={buttonRegister} type="submit"><Link className={noLink} to="/app/ocurrency">Finalizar</Link></button>
            </div>
          </form>
        </div>
      </React.Fragment>
    </main>
  )
}

export default Instructions