import React from 'react'
import './Caixa.css'
export default function Caixa(props) {
  return (
    <div className={`caixa ${props.classCSS}`}>
        <p>Caixa com fundo Colorido</p>
    </div>
  )
}
