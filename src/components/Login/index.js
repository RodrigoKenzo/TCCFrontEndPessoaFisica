import React, { useState } from "react";
import { Link } from "gatsby";
import { useForm } from "react-hook-form";
import "./styles.scss";
import { loginHandler } from "../../services/login.service";
import {
  container,
  textCentered,
  backgroundImage,
  content,
  registerLink,
  row,
  rowButton,
  // buttonBack,
  textLeft,
  buttonRegister,
} from "../../styles/register.module.scss";

import { loginContext } from '../../contexts/loginContext'

// eslint-disable-next-line react/prop-types
const Login = ({ pageTitle, Login, error }) => {
  const { register, handleSubmit } = useForm();
  /*const onSubmit = (data) => loginHandler(data);*/
  const onSubmit = (data) => loginContext(data);

  const [details, setDetails] = useState({email: "", password: ""})

  const submitHandler = e => {
    e.preventDefault()

    Login(details)
  }

  return (
    /*<main>
      <div className={backgroundImage}>
        <title>{pageTitle}</title>
        <div className={container}>
          <div className={textCentered}>
            <p style={{ fontSize: "16px" }}>Login</p>
          </div>
          <hr />
          <div className={content}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={row}>
                <input
                  type="string"
                  placeholder="Usuário"
                  {...register("username", { required: true, maxLength: 30 })}
                />
              </div>
              <div className={row}>
                <input
                  type="password"
                  placeholder="Senha"
                  {...register("password", { required: true, maxLength: 20 })}
                />
              </div>
              <hr />
              <div className={rowButton}>
                {/* <button className={buttonBack} type="submit">
                  <Link className={noLink} to="/register">
                    Registrar
                  </Link>
                </button>*//*}
                <input
                  className={buttonRegister}
                  type="submit"
                  value="Entrar"
                />
              </div>
              <div className={textLeft}>
                <h2>Não tem cadastro?</h2>
                <Link className={registerLink} type="submit" to="/register">
                  Cadastre-se aqui
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>*/
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        {/* ERROR */}
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" onChange={ e => setDetails({...details, email: e.target.value})} value={details.email} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha: </label>
          <input type="password" name="password" id="password" onChange={ e => setDetails({...details, password: e.target.value})} value={details.password} />
        </div>
        <input type="submit" value="LOGIN" />
      </div>
    </form>
  );
};

export default Login;
