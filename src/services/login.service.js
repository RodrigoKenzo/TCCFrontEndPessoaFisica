import { myHeaders } from "../utils/requestHeaders";


export const login = async (register) => {
  const url = `http://127.0.0.1/5000/api/PessoasFisicas/api/v1/pflogin?username=${register.username}&senha=${register.password}`;

  try {
    await fetch(url, {
      method: "post",
      headers: myHeaders
    }).then((response) => console.log(response));
  } catch (error) {
    console.log(error);
  }
};
