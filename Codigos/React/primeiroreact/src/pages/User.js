import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const { id } = useParams ()
  return (
    <div>
      <h2>Visualizando Dados do usuario: { id}</h2>
    </div>
  )
}

export default User
