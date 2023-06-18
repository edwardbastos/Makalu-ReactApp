import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, totalQuantity, setTotalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
