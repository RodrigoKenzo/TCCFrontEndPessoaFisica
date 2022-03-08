import { useContext } from "react"

const formData = {
  OcurrencyType,
  ManyInvolved,
  Victims,
  GenerationDate,
  Latitude,
  Longitude,
  City,
  State,
  Adress,
  Number,
  Neighborhood,
  Complement,
  Details,
  AnswerDate,
  Dangerous,
  Urgency
}

export const useForm = () => {
  return useContext(formData)
}