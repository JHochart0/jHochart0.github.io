import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import '../css/Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Me contacter</h1>

            <form
                action="https://formsubmit.co/6fb952b90f78235eea697297767b28be"
                method="POST"
                className="contact-form"
            >
                <input type="text" name="Nom" placeholder="Votre nom..." required />
                <input type="email" name="Adresse email" placeholder="Votre adresse email..." required />
                <textarea name="Message" placeholder="Votre message..." required />
                <button type="submit" className="contact-submit">Envoyer</button>

                {/* Anti-spam */}
                <input type="hidden" name="_captcha" value="true" />
                <input type="hidden" name="_template" value="box" />
                <input type="hidden" name="_subject" value="Demande de contact depuis le portfolio"></input>
                <input type="hidden" name="_next" value="http://localhost:5173/#/email-sent" />
            </form>

            <div className="contact-links">
                
                <h2>Mes réseaux</h2>
                <ul>
                    <li>
                    <a href="https://linkedin.com/in/tonprofil" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="social-icon" /> LinkedIn
                    </a>
                    </li>

                    <li>
                    <a href="https://github.com/tonpseudo" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="social-icon" /> GitHub
                    </a>
                    </li>

                    <li>
                    <a href="mailto:ton.email@exemple.com">
                        <FontAwesomeIcon icon={faEnvelope} className="social-icon" /> Email direct
                    </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Contact;
