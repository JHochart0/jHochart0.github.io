import React from 'react';
import NavLink from "../Components/NavLink.jsx";

import '../css/NotFound404.css';

function NotFound404() {
  return (
    <div className="notFound404-container">
        <h1>Désolé</h1>
        <p>Cette page n'existe pas.</p>
        <NavLink to="/" content="Retourner à l'accueil..." id="notFound404-link"/>
    </div>
  )
}

export default NotFound404;
