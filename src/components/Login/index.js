import React from "react";
import { Link } from "gatsby";
import { useForm } from "react-hook-form";
import "./styles.scss";
import { navigate } from "gatsby"
import {
  container,
  textCentered,
  backgroundImage,
  content,
  registerLink,
  row,
  rowButton,
  textLeft,
  buttonRegister,
} from "../../styles/register.module.scss";

import { useLogin } from '../../contexts/loginContext'

// eslint-disable-next-line react/prop-types
const Login = () => {
  const { register, handleSubmit } = useForm();
  const { login } = useLogin()

  const onSubmit = (data) => {
    login(data)
    navigate('/app/ocurrency')
  };

  return (
    <main>
      <div className={backgroundImage}>
        <title>Login</title>
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
    </main>
  );
};

export default Login;
