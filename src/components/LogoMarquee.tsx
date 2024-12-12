import React, { useEffect, useState } from 'react';
import './LogoMarquee.css';

const logos = [
  { src: '/nextlogo.svg', alt: 'Next.js Logo' },
  { src: '/mongodblogo.svg', alt: 'MongoDB Logo' },
  { src: '/stripelogo.svg', alt: 'Stripe Logo' },
  { src: '/typescriptlogo.svg', alt: 'TypeScript Logo' },
  { src: '/vercellogo.svg', alt: 'Vercel Logo' },
];

const LogoMarquee = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [key, setKey] = useState(0); // Key state to force re-render
  const [isVisible, setIsVisible] = useState(false); // State to control appearance animation

  useEffect(() => {
    // Fonction pour vérifier et mettre à jour le mode sombre
    const root = document.documentElement;

    const updateDarkMode = () => {
      setIsDarkMode(root.classList.contains('dark'));
    };

    // Mise à jour initiale
    updateDarkMode();

    // Observe pour surveiller les changements de classe sur <html>
    const observer = new MutationObserver(updateDarkMode);
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });

    // Nettoyage à la fin du cycle de vie du composant
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Ajout de la classe d'animation après que le DOM soit complètement chargé
    const handleDOMContentLoaded = () => {
      setIsVisible(true);
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
    } else {
      handleDOMContentLoaded();
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
    };
  }, []);

  useEffect(() => {
    // Force le reset de l'animation toutes les 20 secondes
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1); 
    }, 20000); // toutes les 20 secondes

    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="marquee-container">
      <div key={key} className={`marquee-content ${isDarkMode ? 'dark-mode' : ''} ${isVisible ? 'appear' : ''}`}>
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="logo-item"
          />
        ))}
        {logos.map((logo, index) => (
          <img
            key={`duplicate-${index}`}
            src={logo.src}
            alt={logo.alt}
            className="logo-item"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
