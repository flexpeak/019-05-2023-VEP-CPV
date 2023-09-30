import React from 'react'

function EscolhaCor(props) {
  return (
    <>
      <h2>Escolha uma cor</h2>
      <input type="radio" name="cor" id="vermelho" 
      onChange={()=> props.onCorSelecionada('vermelho')}/>
      <label htmlFor="cor">Vermelho</label>
      <input type="radio" name="cor" id="verde"
      onChange={()=> props.onCorSelecionada('verde')}/>
      <label htmlFor="cor">Verde</label>
      <input type="radio" name="cor" id="azul"
      onChange={()=> props.onCorSelecionada('azul')}/>
      <label htmlFor="cor">Azul</label>     
    </>
  )
}

export default EscolhaCor
