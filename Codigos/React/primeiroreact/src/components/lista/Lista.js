import React from 'react'

function Lista() {
    const usuarios = ['Kenny', 'Ray', 'Letycia', 'Sandroy']
  return (
    <div>
      <ul>
        {usuarios.map((usuario, index)=>(
            <li key={index}>{usuario}</li>
        ))}
      </ul>
    </div>
  )
}

export default Lista
