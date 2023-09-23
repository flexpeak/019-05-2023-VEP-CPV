import React, { useState } from 'react'

function ListaDinamica() {
    const [nome, setNome] = useState('')
    const [usuarios, setUsuarios] = useState([])

    const handleNomeChange = (event)=>{
        setNome(event.target.value)
    }
    const adicionarUsuario =()=>{
      if (nome.trim() !== ''){
        setUsuarios([...usuarios , nome])
        setNome ('')
      }else{
        alert ("Campo Nome Vazio")
      }
    } 
  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {usuarios.map((usuario, index)=>(
            <li key={index}>{usuario}</li>
        ))}
      </ul>
      <input type="text" name="" id=""
       placeholder='Digite um nome' 
       value={nome}
       onChange={handleNomeChange}/>
       <button onClick={adicionarUsuario} >Adicionar</button>

    </div>
  )
}

export default ListaDinamica
