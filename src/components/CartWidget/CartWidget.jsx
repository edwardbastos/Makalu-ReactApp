import React, { useContext } from "react";
import "./CartWidget.css"; // Importar estilos CSS
import { Image, Badge } from 'react-bootstrap'; // Importar componentes de react-bootstrap
import { CartContext } from '../CartContext/CartContext'; // Importar el contexto CartContext

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext); // Obtener la cantidad total del carrito del contexto CartContext
  const imgCarrito = process.env.PUBLIC_URL + '/assets/img/carrito.png'; // Ruta de la imagen del carrito

  return (
    <div className="cart-container">
      <Image
        className="d-inline-block align-text-top imgCarrito img-fluid"
        src={imgCarrito}
        alt="Carrito de Compras"
      /> {/* Mostrar la imagen del carrito */}
      <Badge className="m-0 cart-counter" pill bg="primary">
        {totalQuantity}
      </Badge> {/* Mostrar la cantidad total del carrito como un badge */}
    </div>
  );
};

export default CartWidget;
