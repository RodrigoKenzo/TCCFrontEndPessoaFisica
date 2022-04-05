import * as React from "react";
import { Link } from "gatsby";
import { useForm } from "react-hook-form";
import {
  container,
  textCentered,
  backgroundImage,
  content,
  row,
  rowButton,
  backLink,
  buttonBack,
  buttonRegister,
} from "../styles/register.module.scss";

const RegistrationPage = ({}) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <main>
      <div className={backgroundImage}>
        <title>{pageTitle}</title>
        <div className={container}>
          <div className={textCentered}>
            <h1>Ferramenta de Auxílio para Emergências Civis</h1>
          </div>
          <hr />
          <div className={content}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={row}>
                <input
                  type="text"
                  placeholder="Nome Completo"
                  {...register("name", { required: true, maxLength: 20 })}
                />
                <input
                  type="text"
                  placeholder="Usuário"
                  {...register("userName", { required: true, maxLength: 20 })}
                />
              </div>
              <div className={row}>
                <input
                  type="number"
                  placeholder="CPF Ex.: 123.123.123-12"
                  {...register("cpf", { required: true, maxLength: 11 })}
                />
                <input
                  type="number"
                  placeholder="dn. ex.00/00/0000"
                  {...register("birthDate", { required: true, maxLength: 11 })}
                />
              </div>
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
              <div className={row}>
                <input
                  type="number"
                  placeholder="RG"
                  {...register("rg", { required: true, maxLength: 20 })}
                />
                <input
                  type="number"
                  placeholder="Cep"
                  {...register("cep", { required: true, maxLength: 8 })}
                />
              </div>
              <div className={row}>
                <input
                  type="text"
                  placeholder="Rua"
                  {...register("street", { required: true, maxLength: 20 })}
                />
              </div>
              <div className={row}>
                <input
                  type="text"
                  placeholder="Cidade"
                  {...register("city", { required: true, maxLength: 50 })}
                />
                <input
                  type="text"
                  placeholder="bairro"
                  {...register("district", { required: true, maxLength: 50 })}
                />
                <input
                  type="text"
                  placeholder="Número"
                  {...register("number", { required: true, maxLength: 20 })}
                />
              </div>
              <hr />
              <div className={rowButton}>
                <button className={buttonBack} type="submit">
                  <Link className={backLink} to="/app">
                    Voltar
                  </Link>
                </button>
                <input
                  className={buttonRegister}
                  type="submit"
                  value="Enviar"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegistrationPage;
