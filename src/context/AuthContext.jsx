import React, { createContext } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [Auth, setAuth] = useState(false)
  const [email, setEmail] = useState("")
  const [pass,setPass] = useState("")
  const login = ()=>{
    setAuth(true)
 
  }
  const handleLogout = ()=>{
    setAuth(false)
    Navigate("/Login")
  }
  


  return <AuthContext.Provider value={{Auth,login,handleLogout,email,setEmail,pass,setPass}}>{children}</AuthContext.Provider>;
};
