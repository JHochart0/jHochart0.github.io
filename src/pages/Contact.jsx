import React, {useState} from 'react';

import usePageTitle from "../utils/usePageTitle";
import useRevealOnScroll from "../utils/useRevealOnScroll";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FaDownload } from "react-icons/fa";

import '../css/Contact.css';

function Contact() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    // Regex to check the format of the email address
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    // function to check if the email typed in the form is corresponding to the good format
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!emailRegex.test(email)) {
            setEmailError('Veuillez entrer une adresse email valide (ex : exemple@domaine.com).');
            return;
        }
        // if ok, we submit the form
        e.target.submit();
    };

    usePageTitle("Contact");
    useRevealOnScroll(".fade-in-up, .fade-in-side-left, .fade-in-side-right");

    return (
        <div className="contact-container fade-in-side-left">
            <h1 className="contact-title">Me contacter</h1>

            <form
                onSubmit={handleSubmit}
                action="https://formsubmit.co/6fb952b90f78235eea697297767b28be"
                method="POST"
                className="contact-form"
            >
                
                <input type="text" name="Nom" placeholder="Votre nom complet..." required />
                <input 
                    type="text" 
                    name="Adresse email" 
                    placeholder="Votre adresse email..."
                    value={email} 
                    onChange={handleEmailChange}
                    required
                />
                <textarea name="Message" placeholder="Votre message..." required />
                {emailError && <p className="mail-error">{emailError}</p>}
                <button type="submit" className="contact-submit">Envoyer</button>

                {/* Anti-spam */}
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="Demande de contact depuis le portfolio"></input>
                <input type="hidden" name="_next" value={`${window.location.origin}/email-sent`}  />
            </form>

            <div className="contact-links">
                
                <h2>Mes réseaux</h2>
                <ul>
                    <li>
                    <a href="https://www.linkedin.com/in/jovany-hochart-414a5a289/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="social-icon" /> LinkedIn
                    </a>
                    </li>

                    <li>
                    <a href="https://github.com/JHochart0" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="social-icon" /> GitHub
                    </a>
                    </li>

                    <li>
                    <a href="mailto:jovanyhochart@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} className="social-icon" /> Email direct
                    </a>
                    </li>
                </ul>
            </div>
            <div className="contact-cv">
                <a
                    href="/cv/CV_Jovany_Hochart.pdf"
                    download
                    className="cv-download-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaDownload className="cv-download-icon" />
                    Télécharger mon CV
                </a>
            </div>
        </div>
    )
}

export default Contact;
