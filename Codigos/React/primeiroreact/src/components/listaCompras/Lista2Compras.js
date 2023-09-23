import React from 'react'
import Botao from '../botao/Botao'

function Lista2Compras() {
    const itens = ['porco', 'ovo', 'vinho', 'pessoas']
  return (
    <>
        <h2>Lista de Compras do Sandroy</h2>
        <ul>
            {itens.map ((item, index)=>(
            <li key={index}>{item}</li>
            ))}
        </ul>
        <Botao></Botao>
        
    </>
  )
}

export default Lista2Compras
