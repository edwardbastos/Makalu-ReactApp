import React, { useContext } from "react";
import "./CartWidget.css";
import { Image, Badge } from 'react-bootstrap';
import { CartContext } from '../CartContext/CartContext';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  const imgCarrito = process.env.PUBLIC_URL + '/assets/img/carrito.png';

  return (
    <div className="cart-container">
      <Image
        className="d-inline-block align-text-top imgCarrito img-fluid"
        src={imgCarrito}
        alt="Carrito de Compras"
      />
      <Badge className="m-0 cart-counter" pill bg="primary">
        {totalQuantity}
      </Badge>
    </div>
  );
};

export default CartWidget;
