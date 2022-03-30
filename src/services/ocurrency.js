import { useFormData } from "../contexts/formContext";
const axios = require("axios");

const newOcurrency = async () => {
  const { formData } = useFormData();
  const DateTime = new Date();

  const url = "http://127.0.0.1:5000/api/Ocorrencias";
  const data = {
    Address: formData.Address,
    AnswerDate: formData.AnswerDate,
    City: formData.City,
    Complement: formData.Complement,
    Details: formData.Details,
    GenerationDate: DateTime,
    Latitude: formData.Latitude,
    Longitude: formData.Longitude,
    ManyEnvolved: formData.ManyEnvolved,
    Neighborhood: formData.Neighborhood,
    Number: formData.Number,
    OcurrencyType: formData.OcurrencyType,
    State: formData.State,
    Victims: formData.Victims,
    Urgency: formData.Urgency,
    caller: {
      Name: "Rodrigo",
      Email: "Rodrigo@gmail.com",
      Cep: "12124123",
      Street: "Rua das ruas",
      Number: "123",
      District: "sees",
      DateCreation: "29032022",
      Cpf: "12315915899",
      Rg: "1231212312",
      BirthDate: "12122012",
    },
  };

  console.log(JSON.stringify(data));

  axios
    .post(url, data)
    .catch((error) => console.log(error.message))
    .then((response) => console.log(response));
};

export default newOcurrency;
