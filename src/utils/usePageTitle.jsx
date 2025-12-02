import React from 'react';
import { useEffect } from "react";

function usePageTitle(title) {

    useEffect(() => {
        document.title = `Jovany Hochart - ${title}`;
    }, [title]);
}

export default usePageTitle;
