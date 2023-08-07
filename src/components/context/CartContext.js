import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext(null);

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

//se podría hacer con for
//acc = acumulador 
//curr = current
  const qtty = cart.reduce((acc, curr) =>{
    return acc + curr.qtty
  }, 0);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};