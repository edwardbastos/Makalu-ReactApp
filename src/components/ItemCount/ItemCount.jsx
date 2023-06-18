import React, { useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from '../CartContext/CartContext';

const ItemCount = () => {
  const [count, setCount] = useState(1);
  const { setTotalQuantity } = useContext(CartContext);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    setTotalQuantity(count); // Actualiza la cantidad total en el contexto del carrito
  };

  return (
    <div>
      <div>
        <Button variant="secondary" onClick={handleDecrement}>-</Button>
        <span>{count}</span>
        <Button variant="secondary" onClick={handleIncrement}>+</Button>
      </div>
      <Button variant="primary" onClick={handleAddToCart}>Agregar al carrito</Button>
    </div>
  );
};

export default ItemCount;
