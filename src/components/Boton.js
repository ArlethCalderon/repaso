import React from 'react'

const Boton = ({click, setClick, nombre, metodo}) => {
  return (

    <div>
      <p>Numero de Clicks:{click}</p>
      <button onClick={metodo}>{nombre}</button>
    </div>
  )
}

export default Boton