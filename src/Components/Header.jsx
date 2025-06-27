import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar.jsx";

function Header() {

    //variable to detect when the page is scrolled down or not
    const [scrolled, setScrolled] = useState(false);

    //useEffect to change the state of "scrolled" when the page is scrolled down or not
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 100) setScrolled(true);
            else setScrolled(false);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
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
            <div className="navbar-sticky-container">
                <Navbar className="navbar-sticky" />
            </div>
        );
    }
}


export default Header;
