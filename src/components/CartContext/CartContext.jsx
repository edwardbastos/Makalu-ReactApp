import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [totalQuantity, setTotalQuantity] = useState(0);

  return (
    <CartContext.Provider value={{ totalQuantity, setTotalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };

