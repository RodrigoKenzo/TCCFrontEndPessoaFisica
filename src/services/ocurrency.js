import { useFormData } from "../contexts/formContext"
const axios = require("axios");

const newOcurrency = async () => {

	const { formData } = useFormData()
  const DateTime = new Date()
  
  const url = "http://127.0.0.1:5000/api/Ocorrencias";
  const data = {
		"OcurrencyType": formData.OcurrencyType,
		"ManyEnvolved": formData.ManyEnvolved,
		"Victims": formData.Victims,
		"GenerationDate": DateTime,
		"Latitude": formData.Latitude,
		"Longitude": formData.Longitude,
		"City": formData.City,
		"State": formData.State,
		"Address": formData.Address,
		"Number": formData.Number,
		"Neighborhood": formData.Neighborhood,
		"Complement": formData.Complement,
		"Details": formData.Details,
		"AnswerDate": formData.AnswerDate,
		"Urgency": formData.Urgency
  };

  console.log(JSON.stringify(data));

	axios.post(url, data)
		.catch(error => console.log(error.message))
		.then(response => console.log(response))
};

export default newOcurrency;