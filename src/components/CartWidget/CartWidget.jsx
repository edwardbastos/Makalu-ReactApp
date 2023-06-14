import React from "react";
import "./CartWidget.css";

const CartWidget = () => {
  const imgCarrito = process.env.PUBLIC_URL + "/assets/img/carrito.png";

  return (
    <div className="cart-container">
      <img
        className="d-inline-block align-text-top imgCarrito img-fluid"
        src={imgCarrito}
        alt="Carrito de Compras"
      />
      <p className="m-0 cart-counter">0</p>
    </div>
  );
};

export default CartWidget;
