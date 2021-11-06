 async function newRegister(register) {

  
    function status(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }

  await fetch("https://localhost:44388/api/PessoasFisicas", {
    method: "post",
    mode: 'no-cors',
    headers: {
      "Content-Type": "application/json", 
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Request-Method': 'POST',
      'mode':'no-cors'
    },
    body: JSON.stringify({       
        username: register.userName,
        password: register.password,
        email: register.email,
        name: register.name,
        cep: register.cep,
        street: register.street,
        number: register.number,
        district: register.district,
        dateCreation: Date.now(),
        cpf: register.cpf,
        rg: register.rg,
        birthDate: register.birthDate
    }),
  }).then((response) => console.log(response));
 }

 export default newRegister;