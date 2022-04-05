import axios from "axios";

const newRegister = async (register) => {
  const DateTime = new window.Date();

  const url = "http://127.0.0.1:5000/api/PessoasFisicas";
  const data = {
    name: register.name,
    cep: register.cep,
    street: register.street,
    number: register.number,
    district: register.district,
    dateCreation: String(DateTime),
    cpf: String(register.cpf),
    rg: register.rg,
    birthDate: register.birthDate,
    username: register.userName,
    password: register.password,
    email: register.email,
  };
  await axios.post(url, data);
};

export default newRegister;
