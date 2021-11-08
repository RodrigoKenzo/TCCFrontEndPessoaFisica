const newRegister = async (register) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Access-Control-Allow-Origin", "*");
  myHeaders.append("Access-Control-Allow-Headers", "Content-Type");

  const url = "https://127.0.0.1:44388/api/PessoasFisicas";
  const data = {
    "username": register.userName,
    "password": register.password,
    "email": register.email,
    "name": register.name,
    "cep": register.cep,
    "street": register.street,
    "number": register.number,
    "district": register.district,
    "dateCreation": Date.now(),
    "cpf": register.cpf,
    "rg": register.rg,
    "birthDate": register.birthDate,
  };

  console.log(JSON.stringify(data));

  await fetch(url, {
    method: "post",
    headers: myHeaders,
    body: JSON.stringify(data),
  }).then((response) => console.log(response));
};

export default newRegister;
