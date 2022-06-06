import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import Style from "./Nav.module.css"
// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const {Auth,handleLogout} = useContext(AuthContext)
  const {cart,setCart} = useContext(CartContext)
const navigate = useNavigate()
   const handleClick = ()=>{
     if(Auth){
       handleLogout()
     }else{
      navigate("/login")
     }
   }
  return (
    <div data-cy="navbar" className={Style.nav}>
      <Link to="/" data-cy="navbar-home-link">Logo</Link>
      <div className={Style.nav1}>
      <span data-cy="navbar-cart-items-count">Cart : {(cart)}</span>
      <button onClick={handleClick} data-cy="navbar-login-logout-button">{Auth?"Logout":"Login"}</button>
      </div>
     
    </div>
  );
};

export default Navbar;
