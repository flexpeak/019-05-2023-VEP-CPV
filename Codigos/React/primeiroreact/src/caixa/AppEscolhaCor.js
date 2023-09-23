import React, {useState} from 'react'
import EscolhaCor from './EscolhaCor'
import Caixa from './Caixa'

function AppEscolhaCor() {
  const [corSelecionada, setCorSelecionada] = useState(null)
  const handleCorSelecionada = (cor) => {
    setCorSelecionada(cor)
  }
    return (
    <div>
        <h1>Escolha a Cor</h1>
        <EscolhaCor onCorSelecionada={handleCorSelecionada} />
        {corSelecionada &&(
            <Caixa classCSS={corSelecionada}/>
        )}
      
    </div>
  )
}

export default AppEscolhaCor
