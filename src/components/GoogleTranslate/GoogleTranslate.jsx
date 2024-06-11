import React, { useEffect } from 'react';

const GoogleTranslate = () => {
    useEffect(() => {
        const addScript = () => {
            const script = document.createElement('script');
            script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
        };

        if (!window.google || !window.google.translate) {
            addScript();
        } else {
            window.googleTranslateElementInit();
        }
    }, []);

    const showTranslateWidget = () => {
        const translateElement = document.getElementById('google_translate_element');
        if (translateElement) {
            translateElement.style.display = 'block';
        }
    };

    return (
        <a onClick={showTranslateWidget}>Translate Page</a>
    );
};

export default GoogleTranslate;
