import React from 'react'
import Botao from '../botao/Botao'

function Lista1Compras() {
    const itens = ['picanha', 'cerveja', 'pistola', 'pessoas']
  return (
    <>
        <h2>Lista de Compras do Lucas</h2>
        <ul>
            {itens.map ((item, index)=>(
            <li key={index}>{item}</li>
            ))}
        </ul>
        <Botao></Botao>
        
    </>
  )
}

export default Lista1Compras
