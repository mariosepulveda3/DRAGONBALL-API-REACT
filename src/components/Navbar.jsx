import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <img
        src="https://logos-marcas.com/wp-content/uploads/2021/02/Dragon-Ball-Logo-650x366.png"
        alt="db"
        className="logo"
      />
      <nav>
        <NavLink to="characters" activeclassname={"active"}>
          Personajes
        </NavLink>
        <NavLink to="" activeclassname={"active"}>
          Inicio
        </NavLink>
        <NavLink to="about" activeclassname={"active"}>
          Información
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
