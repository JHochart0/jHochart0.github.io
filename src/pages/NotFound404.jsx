import React from 'react';
import NavLink from "../Components/NavLink.jsx";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import '../css/NotFound404.css';

function NotFound404() {
  return (
    <div className="notFound404-container">
        <h1>Désolé</h1>
        <p>Cette page n'existe pas.</p>
        <NavLink to="/" content="Retour à l'accueil" id="notFound404-link">
            <FontAwesomeIcon className="notFound404-link-icon" icon={faArrowLeft} />
        </NavLink>
    </div>
  )
}

export default NotFound404;
