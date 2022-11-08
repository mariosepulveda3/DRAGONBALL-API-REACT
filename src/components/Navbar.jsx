import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.scss";

const Navbar = () => {
  return (
    <div className="nav">
      <img
        src="https://logos-marcas.com/wp-content/uploads/2021/02/Dragon-Ball-Logo-650x366.png"
        alt="db"
        className="logo"
      />
      <nav>
        <NavLink to="" activeclassname={"active"}>
          Home
        </NavLink>
        <NavLink to="about" activeclassname={"active"}>
          About
        </NavLink>
        <NavLink to="characters" activeclassname={"active"}>
          Characters
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
