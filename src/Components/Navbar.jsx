import React from 'react';
import NavLink from "./NavLink.jsx";

function Navbar(props) {
    const className = props.className;

    return (
        <nav className={className}>
            <NavLink to="/" content="Accueil" id="navbar-homeLink"/>
            <NavLink to="/about" content="À propos" id="navbar-aboutLink"/>
            <NavLink to="/projects" content="Projets" id="navbar-projectsLink"/>
            <NavLink to="/skills" content="Compétences" id="navbar-skillsLink"/>
            <NavLink to="/contact" content="Contact" id="navbar-contactLink"/>
        </nav>
    );
    
}
    

export default Navbar;
