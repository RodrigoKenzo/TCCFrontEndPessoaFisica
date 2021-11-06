import * as React from "react";
import { Link } from "gatsby";
import { useForm } from "react-hook-form";
import "./styles.scss";
import {
  container,
  textCentered,
  backgroundImage,
  content,
  row,
  rowButton,
  noLink,
  buttonBack,
  buttonRegister,
} from "../../styles/register.module.scss";

const Login = ({ pageTitle }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <main>
      <div className={backgroundImage}>
        <title>{pageTitle}</title>
        <div className={container}>
          <div className={textCentered}>
            <p>Login</p>
          </div>
          <hr />
          <div className={content}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={row}>
                <input
                  type="email"
                  placeholder="Email Ex.: Rodrigo@gmail.com"
                  {...register("email", { required: true, maxLength: 30 })}
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
                <button className={buttonBack} type="submit">
                  <Link className={noLink} to="/register">
                    Registrar
                  </Link>
                </button>
                <input className={buttonRegister} type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
