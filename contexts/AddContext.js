import React, { createContext, useState } from 'react';

export const ListContext = createContext();

const AddListContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
};

const addItem = (cartItems) => {
  setCartItems([...cartItems, { text: cartItems, id: `${Math.random()}` }]);
};

return (
  <ListContext.Provider value={{ cartItems, addItem }}>
    {children}
  </ListContext.Provider>
);
export default ListContext;
