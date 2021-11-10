const newRegister = async (register) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Access-Control-Allow-Headers", "Content-Type");
  myHeaders.append("Acces-Control-AllowOrigin","*")

  var DateTime = new Date()
  
  const url = "http://127.0.0.1:5000/api/PessoasFisicas";
  const data = {
    "name": register.name,
    "cep": register.cep,
    "street": register.street,
    "number": register.number,
    "district": register.district,
    "dateCreation": DateTime.toJSON(),
    "cpf": String(register.cpf),
    "rg": register.rg,
    "birthDate": register.birthDate,
    "username": register.userName,
    "password": register.password,
    "email": register.email,
  };

  console.log(JSON.stringify(data));

  try {
    await fetch(url, {
      method: "post",
      headers: myHeaders,
      body: JSON.stringify(data),
    }).then((response) => console.log(response));
  } catch (error) {
    console.log(error)
  }

};

export default newRegister;
