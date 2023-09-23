import React from 'react'
import Lista1Compras from './Lista1Compras'
import Lista2Compras from './Lista2Compras'
import Botao from '../botao/Botao'

function AppListaCompras() {
  return (
    <div>
        <h1>Listas de Listas</h1>
        <Lista1Compras></Lista1Compras>
        <Lista2Compras></Lista2Compras>
        <Botao></Botao>
    </div>
  )
}

export default AppListaCompras
