import React from 'react';

import "../css/About.css";

import usePageTitle from "../utils/usePageTitle";
import useRevealOnScroll from "../utils/useRevealOnScroll";

import NavLink from "../Components/NavLink";

function About() {

    usePageTitle("À propos");
    useRevealOnScroll(".fade-in-up, .fade-in-side-left, .fade-in-side-right");

    return (
        <div className="about-container">

            <h1 className="about-title fade-in-side-left">À propos</h1>

            {/* Intro */}
            <div className="about-intro fade-in-up">
                <p>
                    En tant que développeur web Full Stack, je conçois et développe des sites 
                    et applications web claires, efficaces et adaptées à l'utilisateur.
                </p>
                <p>
                    J'accorde énormément d'importance à la qualité de mes projets, 
                    à l'écoute et l'adaptation des demandes de mes clients,
                    et à la facilité d'utilisation pour n'importe quel individu.
                </p>
            </div>

            {/* Formations */}
            <div className="about-section fade-in-side-right">
                <h2 className="about-section-title">🎓 Formations & diplômes</h2>
                <p>
                    J’ai suivi un parcours orienté informatique avec l’obtention
                    d’un DUT et d’une licence en informatique .
                    J’ai également entrepris une année de master en développement
                    de jeux vidéo, renforçant mes compétences en programmation,
                    en architecture logicielle et en gestion de projets.
                </p>
            </div>

            {/* Expériences */}
            <div className="about-section fade-in-side-right">
                <h2 className="about-section-title">💼 Expériences professionnelles</h2>
                <p>
                    Durant ma carrière, j’ai travaillé sur plusieurs projets personnels et professionnels,
                    en autonomie comme en équipe. 
                </p>
                <p>
                    Lors d’un stage en développement web pour l'association sportive <b className="about-section-bold">LISSP CALAIS VOLLEY-BALL</b>,
                    j’ai participé à la conception et au développement d’un extranet entièrement développé
                    avec Symfony, en utilisant des méthodes de travail agiles
                    et des outils collaboratifs au sein d'une équipe de trois stagiaires développeurs.
                </p>
                <p>
                    J'ai aussi réalisé bénévolement, en indépendant, un site vitrine entier pour 
                    l'entreprise indépendante de mécanique automobile <b className="about-section-bold">DEPAN AUTO 62</b> disponible sur ce 
                    <a href="https://depan-auto-62.fr/" className="about-section-link"> lien</a>.
                </p>

                <NavLink
                    to="/projects"
                    content="Voir mes différents projets →"
                    id="about-projects-link"
                />
            </div>

            {/* Stacks */}
            <div className="about-section fade-in-side-right">
                <h2 className="about-section-title">🛠️ Stacks principales</h2>
                <p>
                    Je développe principalement mes applications web en JavaScript,
                    avec React côté front-end et Node.js / Express côté back-end.
                    J’utilise également PHP et Symfony selon certains besoins.
                </p>
                <p>
                    Je pratique une veille technologique régulière afin de rester
                    à jour et d’améliorer continuellement mes méthodes et outils de travail.
                </p>

                <NavLink
                    to="/skills"
                    content="Voir mes compétences →"
                    id="about-skills-link"
                />
            </div>

            {/* Objectives */}
            <div className="about-section fade-in-side-right">
                <h2 className="about-section-title">🎯 Objectifs</h2>
                <p>
                    Je recherche constamment des opportunités me permettant de mettre en œuvre
                    mes compétences en concevant des projets concrets, utiles et techniquement solides.
                </p>
                <NavLink
                    to="/contact"
                    content="Me contacter ici →"
                    id="about-contact-link"
                />
            </div>

        </div>
    );
}

export default About;
