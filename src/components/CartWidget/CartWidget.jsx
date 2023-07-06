import React, { useContext } from "react";
import "./CartWidget.css"; // Importar estilos CSS
import { CarritoContext } from '../../context/CarritoContext'; // Importar el contexto CartContext
import { Image, Badge } from 'react-bootstrap'; // Importar componentes de react-bootstrap
import { Link } from 'react-router-dom';


const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  const imgCarrito = process.env.PUBLIC_URL + '/assets/img/carrito.png';

  return (
    <div className="cart-container">
      <Link style={{ textDecoration: "none" }} to='/cart'>
        <Image
          className="d-inline-block align-text-top imgCarrito img-fluid"
          src={imgCarrito}
          alt="Carrito de Compras"
        /> {/* Mostrar la imagen del carrito */}
        <Badge className="m-0 cart-counter" pill bg="primary">
          {cantidadTotal}
        </Badge> {/* Mostrar la cantidad total del carrito como un badge */}
      </Link>
    </div>
  )

}

export default CartWidget