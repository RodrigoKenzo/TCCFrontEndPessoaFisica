const axios = require("axios");

const newOcurrency = async (formData) => {

  const DateTime = new Date()

  async function getLocation() {
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(showPosition)
    } else { 
      console.log("Geolocation is not supported by this browser.")
    }
  }
  
  async function showPosition(position) {
    const coords = {
      Latitude: position.coords.latitude, 
      Longitude: position.coords.longitude 
    }
  
    const url = "http://127.0.0.1:5000/api/Ocorrencias";
    const data = {
      "OcurrencyType": formData.OcurrencyType,
      "ManyEnvolved": formData.ManyInvolved,
      "Victims": formData.Victims,
      "GenerationDate": DateTime,
      "Latitude": coords.Latitude,
      "Longitude": coords.Longitude,
      "City": formData.City,
      "State": formData.State,
      "Address": formData.Address,
      "Number": formData.Number,
      "Neighborhood": formData.Neighborhood,
      "Complement": formData.Complement,
      "Details": formData.Details,
      "AnswerDate": "",
      "Urgency": formData.Urgency
    };

    console.log(JSON.stringify(data));

    axios.post(url, data)
      .catch(error => console.log(error.message))
      .then(response => console.log(response))
  }

  await getLocation()
};

export default newOcurrency;