import React from 'react'
import './Texto.css'
import macaco from './assets/macaco.jpeg'

function Texto() {
    const nome = "Erico Borgonove"
    const anoAtual = 2023
    const anoNasc = 1987
  return (
    <div>
      <h1>Ola Mundo</h1>
      <img src={macaco} alt="" />
      <p className='fonte'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, quia!</p>
      <p>Olá meu nome é {nome} e tenho {anoAtual-anoNasc} anos </p>    
    </div>
  )
}

export default Texto
