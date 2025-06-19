import React from 'react';
import NavLink from "../Components/NavLink.jsx";

function NotFound404() {
  return (
    <div className="NotFound404-container">
        <h1>Désolés</h1>
        <p>Cette page n'existe pas.</p>
        <NavLink to="/" content="Retourner à l'accueil..." id="notFound404-link"/>
    </div>
  )
}

export default NotFound404;
