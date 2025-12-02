import React from 'react';
import NavLink from "../Components/NavLink.jsx";
import usePageTitle from "../utils/usePageTitle";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import '../css/EmailConfirmation.css';

function EmailConfirmation() {

    usePageTitle("Demande de contact envoyée !");
    
    return (
        <div className="emailconfirmation-container">
            <h1 className="emailconfirmation-h1">Message envoyé !</h1>
            <p className="emailconfirmation-p">Merci pour votre prise de contact.</p>
            <p className="emailconfirmation-p">Je vous répondrai le plus rapidement possible ! 🚀</p>
            <NavLink to="/" content="Retour à l'accueil" id="emailconfirmation-link">
                <FontAwesomeIcon className="emailconfirmation-link-icon" icon={faArrowLeft} />
            </NavLink>
        </div>
    )
}

export default EmailConfirmation;
