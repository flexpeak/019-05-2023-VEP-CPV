import React , {createContext, useContext, useState} from 'react'

const GlobalStateContext = createContext()

export const useGlobalState = () => {
    return useContext (GlobalStateContext)
}
export const GlobalStateProvider = ({children}) => {
    const [nome, setNome] = useState ('')
    const [email, setEmail] = useState ('')

    const setGlobalNome = (value) =>{
        setNome(value)
    }
    const setGlobalEmail = (value) =>{
        setEmail(value)
    }

  return (
    <GlobalStateContext.Provider
    value= {{
        nome,
        email,
        
        setGlobalNome,
        setGlobalEmail
    }}>
      {children}
    </GlobalStateContext.Provider>
  )
}

