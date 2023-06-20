import React, { createContext, useState } from "react";

// Crear el contexto
const CartContext = createContext();

// Crear el proveedor del contexto
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // Estado para almacenar los elementos del carrito
  const [totalQuantity, setTotalQuantity] = useState(0); // Estado para almacenar la cantidad total de elementos

  const increaseQuantity = (itemId) => {
    // Aumentar la cantidad de un elemento en el carrito
    const updatedItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, cantidad: item.cantidad + 1 }; // Incrementar la cantidad del elemento seleccionado
      }
      return item;
    });
    setCartItems(updatedItems); // Actualizar el estado de los elementos del carrito
    calculateTotalQuantity(updatedItems); // Calcular la cantidad total de elementos en el carrito
  };

  const calculateTotalQuantity = (items) => {
    // Calcular la cantidad total de elementos en el carrito
    const totalQuantity = items.reduce(
      (total, item) => total + item.cantidad,
      0
    );
    setTotalQuantity(totalQuantity); // Actualizar el estado de la cantidad total de elementos
  };

  // Proporcionar el contexto y los métodos asociados a los componentes hijos
  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        totalQuantity,
        setTotalQuantity,
        increaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
