import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar.jsx";

import '../css/Header.css';

function Header() {

    //variable to detect when the page is scrolled down or not
    const [scrolled, setScrolled] = useState(false);
    const [hideStickyContainer, setHideStickyContainer] = useState(false);

    //useEffect to change the state of "scrolled" when the page is scrolled down or not
    useEffect(() => {
        const checkScrollValue = () => {
            setScrolled(window.scrollY > 100);
            setHideStickyContainer(window.scrollY > 180);
        };

        //check immediately the scroll value (in case the user refresh the page)
        checkScrollValue();

        window.addEventListener('scroll', checkScrollValue);
        return () => window.removeEventListener('scroll', checkScrollValue);
    }, []);

    //if the page is not scrolled down, we show the whole header, else we only show navbar in sticky mode
    if (!scrolled) {
        return (
            <div className="header-container">
                <h1 className="header-title">Jovany Hochart</h1>
                <Navbar className="navbar" />
            </div>
        );
    }else{
        return (
            <>
                <div className="header-container">
                    <h1 className="header-title">Jovany Hochart</h1>
                </div>
                <div className={`navbar-sticky-container ${hideStickyContainer ? 'navbar-sticky-container-hidden' : ''}`
          }>
                    <Navbar className="navbar-sticky" />
                </div>
            </>
        );
    }
}


export default Header;
