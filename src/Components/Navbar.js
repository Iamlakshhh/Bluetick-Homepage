/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../Assets/logo.jpg";
const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo-container">
      <img className="Footer-img" src={Logo} alt="" />
      <h1>Bluetick Consultants LLP</h1>
      </div>
    </nav>
  );
};

export default Navbar;
