import React, { createContext, useContext, useState } from "react"

export const formContext = createContext({})

export function FormContextProvider({ children }) {

  const [formData, setFormData] = useState()

  return (
    <formContext.Provider
      value={{
        formData,
        setFormData
      }}
    >
      {children}
    </formContext.Provider>
  )
}

export const useFormData = () => {
  console.log('a')
  return useContext(formContext)
}