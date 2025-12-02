import React from 'react';

import usePageTitle from "../utils/usePageTitle";
import useRevealOnScroll from "../utils/useRevealOnScroll";

import { FaLaptopCode, FaServer, FaCode, FaGamepad, FaDatabase, FaProjectDiagram } from 'react-icons/fa';

import htmlLogo from '../assets/skills_logo/html.png';
import jsLogo from '../assets/skills_logo/javascript.png';
import reactLogo from '../assets/skills_logo/react.png';
import jqueryLogo from '../assets/skills_logo/jquery.png';
import twigLogo from '../assets/skills_logo/twig.png';
import nodeLogo from '../assets/skills_logo/node.png';
import expressLogo from '../assets/skills_logo/express.png';
import phpLogo from '../assets/skills_logo/php.png';
import symfonyLogo from '../assets/skills_logo/symfony.png';
import pythonLogo from '../assets/skills_logo/python.png';
import javaLogo from '../assets/skills_logo/java.png';
import csharpLogo from '../assets/skills_logo/csharp.png';
import unityLogo from '../assets/skills_logo/unity.png';
import postgresLogo from '../assets/skills_logo/postgresql.png';
import mysqlLogo from '../assets/skills_logo/mysql.png';
import mongoLogo from '../assets/skills_logo/mongodb.png';
import gitLogo from '../assets/skills_logo/git.png';
import agileLogo from '../assets/skills_logo/agile.png';


import '../css/Skills.css';

function Skills() {
   
    const skills = [
        {
            icon: <FaLaptopCode />,
            title: "Développement Front-end",
            items: [
                { name: "HTML / CSS", logo: htmlLogo },
                { name: "JavaScript", logo: jsLogo },
                { name: "jQuery", logo: jqueryLogo },
                { name: "ReactJS", logo: reactLogo },
                { name: "Twig", logo: twigLogo },
            ],
        },
        {
            icon: <FaServer />,
            title: "Développement Back-end",
            items: [
                { name: "Node.js", logo: nodeLogo },
                { name: "Express", logo: expressLogo },
                { name: "PHP", logo: phpLogo },
                { name: "Symfony", logo: symfonyLogo },
            ],
        },
        {
            icon: <FaCode />,
            title: "Développement logiciel",
            items: [
                { name: "Python", logo: pythonLogo },
                { name: "Java", logo: javaLogo },
                { name: "C#", logo: csharpLogo },
            ],
        },
        {
            icon: <FaGamepad />,
            title: "Développement jeu-vidéo",
            items: [
                { name: "Unity", logo: unityLogo },
            ],
        },
        {
            icon: <FaDatabase />,
            title: "Base de données",
            items: [
                { name: "PostgreSQL", logo: postgresLogo },
                { name: "MySQL", logo: mysqlLogo },
                { name: "MongoDB", logo: mongoLogo },
            ],
        },
        {
            icon: <FaProjectDiagram />,
            title: "Gestion de projet et méthodologies",
            items: [
                { name: "Git / GitHub / GitLab", logo: gitLogo },
                { name: "Méthode Agile", logo: agileLogo }
            ],
        },
    ];

    usePageTitle("Mes compétences");
    useRevealOnScroll(".fade-in-up, .fade-in-side-left, .fade-in-side-right");

    return (
        <div className="skills-container">
            <h1 className="skills-title fade-in-side-left">Mes compétences</h1>

            <div className="skills-grid">
                {skills.map((category, index) => (
                    <div className="skill-card fade-in-up" key={index}>
                        <div className="skill-icon">{category.icon}</div>
                        <h2 className="skill-title">{category.title}</h2>
                        <div className="skill-list">
                            {category.items.map((item, i) => (
                                <div className="skill-item" key={i}>
                                    <img src={item.logo} alt={item.name} className="skill-logo" />
                                    <span className="skill-name">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;