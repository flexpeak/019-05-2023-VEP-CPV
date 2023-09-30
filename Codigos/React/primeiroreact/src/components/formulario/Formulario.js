import React, {useState} from 'react'

function Formulario() {
    const [nome, setNome] = useState ()
    const [email, setEmail] = useState ()

    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log ('Foi Feito um evento')
        console.log (nome)
        console.log (email)
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">
            <span>Nome:</span>
            <input type="text" name="nome" id="" placeholder='Digite o seu Nome'
            onChange={(e) => setNome (e.target.value)}/>
        </label>
        <label htmlFor="email">
            <span>Email:</span>
            <input type="email" name="email" id="" placeholder='Digite o seu Email' 
            onChange={(e) => setEmail (e.target.value)}/>
        </label>

        <button>Salvar</button>



      </form>
    </>
  )
}

export default Formulario
