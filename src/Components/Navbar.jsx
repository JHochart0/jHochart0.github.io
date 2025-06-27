import React from 'react';
import NavLink from "./NavLink.jsx";

function Navbar(props) {
    const className = props.className;

    return (
        <nav className={className}>
            <NavLink to="/" content="Accueil" id="navbar-homeLink"/>
            <NavLink to="/about" content="À propos" id="i"/>
            <NavLink to="/projects" content="Projets" id="i"/>
            <NavLink to="/skills" content="Compétences" id="i"/>
            <NavLink to="/contact" content="Contact" id="i"/>
        </nav>
    );
    
}
    

export default Navbar;
