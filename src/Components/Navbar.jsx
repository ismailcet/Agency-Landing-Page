import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <img src={Logo} alt="Logo" />
      <ul className="nav-items flex gap-12">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/adversite">Adversite</Link>
        </li>
        <li className="nav-item">
          <Link to="/supports">Supports</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <button className="btn-started">get started</button>
    </nav>
  );
};

export default Navbar;
