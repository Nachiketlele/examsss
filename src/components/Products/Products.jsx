import axios from "axios";
import React, { useEffect, useState } from "react";
import Style from "./Product.module.css"
import Product from "./Product/Product";
const Products = () => {
  const [value,setValue] = useState([])

  useEffect(()=>{
    let getData = async () =>{
       let res = await axios.get("http://localhost:8080/products")
       setValue(res.data)
       console.log(res.data)
    }
    getData()
  },[])
  return <div className={Style.divs}>
        {value.map((el)=>(
           <Product key={el.id} el={el}/>
        ))}
  </div>;
};

export default Products;
