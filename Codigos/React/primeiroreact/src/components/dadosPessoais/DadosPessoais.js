/* import React from 'react'

function DadosPessoais({nome, dados}) {
  return (
    <div>
      <ol>
        <li>Nome: {nome} </li>
        <li>Sobrenome: {dados.sobrenome}</li>
        <li>Idade: {dados.idade}</li>
      </ol>
    </div>
  )
}
export default DadosPessoais */

import React from 'react'

function DadosPessoais(props) {
  return (
    <div>
      <ol>
        <li>Nome: {props.nome} </li>
        <li>Sobrenome: {props.dados.sobrenome}</li>
        <li>Idade: {props.dados.idade}</li>
      </ol>
    </div>
  )
}
export default DadosPessoais
