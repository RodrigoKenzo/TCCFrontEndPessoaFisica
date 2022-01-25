import { myHeaders } from "../utils/requestHeaders";

export const loginHandler = async (register) => {
  const url = `http://127.0.0.1/5000/api/PessoasFisicas/pflogin`;
  const data = { username: register.username, password: register.password };
  await fetch(url, {
    method: "post",
    headers: myHeaders,
    body: JSON.stringify({
      data,
    }),
  })
    .then((response) => console.log(response))
    .catch((error) => {
      console.log(error);
    });
};
