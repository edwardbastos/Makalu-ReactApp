import React, { createContext, useState } from 'react';

const CheckOutContainer = createContext();

const CheckOutProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const increaseQuantity = (itemId) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, cantidad: item.cantidad + 1 };
      }
      return item;
    });
    setCartItems(updatedItems);
    calculateTotalQuantity(updatedItems);
  };

  const calculateTotalQuantity = (items) => {
    const totalQuantity = items.reduce((total, item) => total + item.cantidad, 0);
    setTotalQuantity(totalQuantity);
  };

  return (
    <CheckOutContainer.Provider
      value={{ cartItems, setCartItems, totalQuantity, setTotalQuantity, increaseQuantity }}
    >
      {children}
    </CheckOutContainer.Provider>
  );
};

export { CheckOutContainer, CheckOutProvider };
