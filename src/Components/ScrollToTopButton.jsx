import React, { useState, useEffect } from 'react';

function ScrollToTopButton() {

    //variable to check when the button must be visible or not
    const [visible, setVisible] = useState(false);

    //useEffect to handle when we show the button or not depending on the scrolling state of the page
    useEffect(() => {
        function checkScrollValue() {
            setVisible(window.scrollY > 100);
        }

        //check immediately the scroll value (in case the user refresh the page)
        checkScrollValue();

        window.addEventListener('scroll', checkScrollValue);

        return () => window.removeEventListener('scroll', checkScrollValue);
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