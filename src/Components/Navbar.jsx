import React from 'react';
import NavLink from "./NavLink.jsx";

function Navbar() {
  return (
    <nav className="navbar">
        <h1 className="navbar-title">Jovany Hochart</h1>
        <div className="navbar-links">
            <NavLink to="/" content="Accueil" id="navbar-homeLink"/>
            <NavLink to="/" content="À propos" id="i"/>
            <NavLink to="/" content="Projets" id="i"/>
            <NavLink to="/" content="Compétences" id="i"/>
            <NavLink to="/" content="Contact" id="i"/>
        </div>
    </nav>
  );
}

export default Navbar;
