import React, { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../../../context/CartContext";
import Style from "./Products.module.css"
const Product = ({el}) => {
  // Note: this id should come from api
  const [count,setCount]= useState(1)
  const {handleCount,handleCou} = useContext(CartContext)
  return (
    <div data-cy={`product-${el.id}`} key={el.id} className={Style.divss}>
      <h3 data-cy="product-name">{el.name}</h3>
      <h6 data-cy="product-description">{el.description}</h6>
      <button data-cy="product-add-item-to-cart-button" onClick={handleCount}>Add to cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={()=>
            setCount(count+1)
           }
          >+</button>
        <span data-cy="product-count">
          {
            count
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={()=>{
          if(count>1){
            setCount(count-1)
          }
        }}>-</button>
        <button data-cy="product-remove-cart-item-button" onClick={handleCou}>Remove</button>
      </div>
    </div>
  );
};

export default Product;
