import * as React from 'react'
import { Link } from 'gatsby'
import { container, textCentered, content, backgroundImage, row, rowButton, noLink, buttonBack, buttonRegister } from '../styles/register.module.scss'

const RegistrationPage = ({ pageTitle }) => {
  return (
    <main>
        <div className={backgroundImage}>
        <title>{pageTitle}</title>
            <div className={container}>
                <div className={textCentered}>
                    <h1>Ferramenta de Auxílio para Emergências Civis</h1>
                </div>
            <hr/>
            <div className={content}>
                <div className={row}>
                    <input type="text" placeholder="Nome Completo" />
                </div>
                <div className={row}>
                    <input type="text" placeholder="CPF" />
                </div>
                <div className={row}>
                    <input type="text" placeholder="Email" />
                </div>
                <div className={row}>
                    <input type="password" placeholder="Senha" />
                </div>
                <div className={row}>
                    <input type="text" placeholder="RG" />
                    <input type="text" placeholder="Cep" />
                </div>
                <div className={row}>
                    <input type="text" placeholder="Cidade" />
                </div>
                <div className={row}>
                    <input type="text" placeholder="Rua" />
                    <input type="text" placeholder="Número" />
                </div>
                <div className={rowButton}>
                    <button className={buttonBack} type="button"><Link className={noLink} to="/">Voltar</Link></button>
                    <button className={buttonRegister} type="button"><Link className={noLink} to="/">Registrar</Link></button>
                </div>
            </div>
            </div>
        </div>
    </main>
  )
}

export default RegistrationPage