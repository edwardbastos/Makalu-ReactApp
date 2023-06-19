import React from 'react';
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className='cardProducto'>
      <div className='imgContainer'>
        <img className='imgProducto' src={img} alt={nombre} />
      </div>
      <div className='infoContainer'>
        <p>{nombre}</p>
        <p>Precio: <span>{precio}</span></p>
        <p>ID: <span>{id}</span></p>
        <Link to={`/item/${id}`} className='btnProducto'>Ver Detalles</Link>
      </div>
    </div>
  )
}

export default Item;
