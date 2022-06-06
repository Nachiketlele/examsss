import React, { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart,setCart]=useState(0)
  const handleCount=()=>[
    setCart(cart+1)
  ]
  const handleCou=()=>{
    if(cart>0){
      setCart(cart-1)
    }
  }
  return <CartContext.Provider value={{cart,setCart,handleCount,handleCou}}>{children}</CartContext.Provider>;
};
