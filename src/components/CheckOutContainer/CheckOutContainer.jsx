import React, { createContext, useState } from 'react';

const CheckOutContainer = createContext();

const CheckOutProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  return (
    <CheckOutContainer.Provider value={{ cartItems, setCartItems, totalQuantity, setTotalQuantity }}>
      {children}
    </CheckOutContainer.Provider>
  );
};

export { CheckOutContainer, CheckOutProvider };
