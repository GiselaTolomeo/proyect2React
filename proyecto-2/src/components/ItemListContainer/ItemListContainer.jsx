import React from 'react'

const ItemListContainer = (props) => {
  return (
    <>
    <h2>Bienvenido/a {props.nombre} a nuestra tienda on-line!</h2>
    <h3>Indique su {props.usuario}</h3>
    <h3>{props.greeting}</h3>
    </>
  )
}

export default ItemListContainer