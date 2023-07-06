import React from "react";
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, img, stock }) => {
  return (
    <div className="cardProducto">
      <div className="imgContainer">
        <img className="imgProducto" src={img} alt={nombre} />
      </div>
      <div className="infoContainer">
        <p>{nombre}</p>
        <p>
          Precio: <span>$ {precio} USD</span>
        </p>
        <p>
          Stock: <span>{stock}</span>
        </p>
        <Link to={`/item/${id}`} className="btnProducto">
          Ver Detalles
        </Link>{" "}
        {/* Enlazar al detalle del producto utilizando el id */}
      </div>
    </div>
  );
};

export default Item;