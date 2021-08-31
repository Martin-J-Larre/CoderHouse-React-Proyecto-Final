import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <>
      <header className="header">
        <div>
          <h1>
            {/* Cambiar letras del logo por una Img */}
            <Link to="/" className="logo">
              Oishii Chef
            </Link>
          </h1>
        </div>
        <div className="header-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Signup</Link>
            </li>
          </ul>
          <CartWidget />
        </div>
      </header>
    </>
  );
};
export default NavBar;
