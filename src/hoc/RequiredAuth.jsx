import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RequiredAuth = ({ children }) => {
  const {Auth} = useContext(AuthContext)
  const {pathName}=useLocation()
  if(Auth){
     return children;
  }else{
    return <Navigate to="/Login" state={{from:pathName}} replace/>
  }
 
};

export default RequiredAuth;
