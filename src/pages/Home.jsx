import React from 'react';

import usePageTitle from "../utils/usePageTitle";

import '../css/Home.css';

function Home() {

    usePageTitle("Accueil");

    return (
        <div className="home-container">
            <div className="intro-container"></div>
            <div>
                <p>
                    Accueil / Work In Progress...
                </p>
            </div>
            
            
        </div>
    )
}

export default Home;
