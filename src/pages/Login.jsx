import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios"
import Style from "./Style.module.css"
import { useNavigate } from "react-router-dom";
const Login = () => {
  const {Auth,login,handleLogout,email,setEmail,pass,setPass} = useContext(AuthContext)
  const navigate = useNavigate()
  const handleLogin = ()=>{
     axios({
       url:`https://reqres.in/api/login`,
       method:"POST",
       data:({
           email:email,
           password:pass,
       }
       )
     }).then((res)=>{
       login()
       navigate("/Products")
     }).catch((err)=>{})
  }
  
  return (
    <div className={Style.div}>
      <div className={Style.div1}>
      <input data-cy="login-email" type="email" value={email} onChange={(e)=>(setEmail(e.target.value))} />
      </div>
      <div className={Style.div1}>
      <input data-cy="login-password" type="password" value={pass} onChange={(e)=>(setPass(e.target.value))} />
      </div>
      <button className={Style.div1} data-cy="login-submit" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
