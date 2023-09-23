import React, {useState} from 'react'

function Botao() {
    let [contador, setContador] = useState (0)
    const handleClick = () =>{
        setContador(++contador)
        console.log (contador)
    } 
  return (
    <>
      <button onClick={handleClick}>Clique em Mim</button>
      <p>O valor do contador é: {contador}</p>
    </>
  )
}

export default Botao
