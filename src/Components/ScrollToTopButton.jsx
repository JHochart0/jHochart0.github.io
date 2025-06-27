import React, { useState, useEffect } from 'react';

function ScrollToTopButton() {

    //variable to check when the button must be visible or not
    const [visible, setVisible] = useState(false);

    //useEffect to handle when we show the button or not depending on the scrolling state of the page
    useEffect(() => {
        function toggleVisibility() {
            if (window.pageYOffset > 100) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        }

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    //function to go back to top of the page when we click on the button
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

  return (
    <>
      {visible && (
        <button onClick={scrollToTop} className="scroll-to-top-btn" aria-label="Remonter en haut de la page">↑</button>
      )}
    </>
  );
}

export default ScrollToTopButton;