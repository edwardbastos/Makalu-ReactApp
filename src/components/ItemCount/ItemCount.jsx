import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { CheckOutContainer } from "../CartContext/CartContext"; // Importar el contexto CheckOutContainer

const ItemCount = () => {
  const [count, setCount] = useState(1); // Estado para la cantidad de productos
  const { setTotalQuantity } = useContext(CheckOutContainer); // Obtener la función para establecer la cantidad total desde el contexto CheckOutContainer

  const handleIncrement = () => {
    setCount(count + 1); // Incrementar la cantidad de productos
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1); // Decrementar la cantidad de productos si es mayor que 1
    }
  };

  const handleAddToCart = () => {
    setTotalQuantity(count); // Actualizar la cantidad total en el contexto del carrito
  };

  return (
    <div>
      <div>
        <Button variant="secondary" onClick={handleDecrement}>
          -
        </Button>{" "}
        {/* Botón para decrementar la cantidad */}
        <span>{count}</span> {/* Mostrar la cantidad actual */}
        <Button variant="secondary" onClick={handleIncrement}>
          +
        </Button>{" "}
        {/* Botón para incrementar la cantidad */}
      </div>
      <Button variant="primary" onClick={handleAddToCart}>
        Agregar al carrito
      </Button>{" "}
      {/* Botón para agregar al carrito */}
    </div>
  );
};

export default ItemCount;
