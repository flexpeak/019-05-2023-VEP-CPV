import React, { useState } from 'react'
import axios from 'axios'

function FormularioCEP() {
    const [cep, setCep] = useState('')
    const [cepData, setCepData] =  useState(null)
    const [error, setError] = useState(null)

    const handleCepChange = (event) =>{
        setCep(event.target.value);
    }

    const handleClickFechCepData = async () => {
        try {
            const response = await axios.get (`https://viacep.com.br/ws/${cep}/json/`)
            setCepData(response.data)
            setError(null)
            if (response.data.erro){
                setError('Cep não encontrado')
                setCepData(null)
            }
        } catch (error) {
            setError('Cep inválido')
            setCepData(null)
        }
    } 


  return (
    <div>
        <h1>Consulta de CEP</h1>
        <input type="text" name="" id=""
        value={cep}
        onChange={handleCepChange}
        placeholder='Digite o CEP'/>

        <button onClick={handleClickFechCepData}>Consultar</button>

        {error && <p>{error}</p>}
        {cepData && (
            <div>
                <p>CEP: {cepData.cep}</p>
                <p>Logradouro: {cepData.logradouro}</p>
                <p>Bairro: {cepData.bairro}</p>
                <p>Cidade: {cepData.localidade}</p>
                <p>Estado: {cepData.uf}</p>
            </div>
        )}
    </div>
  )
}

export default FormularioCEP
