import React, { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h2>Carrito de compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <span>{item.nombre}</span>
              <span>{item.cantidad}</span>
              <span>{item.precio}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
