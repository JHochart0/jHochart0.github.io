import React from 'react'
import NavLink from "../Components/NavLink.jsx";

import '../css/EmailConfirmation.css';

function EmailConfirmation() {
  return (
    <div className="emailconfirmation-container">
        <h1 className="emailconfirmation-h1">Message envoyé !</h1>
        <p className="emailconfirmation-p">Merci pour votre prise de contact.</p>
        <p className="emailconfirmation-p">Je vous répondrai le plus rapidement possible ! 🚀</p>
        <NavLink to="/" content="Retourner à l'accueil..." id="emailconfirmation-link"/>
    </div>
  )
}

export default EmailConfirmation;
