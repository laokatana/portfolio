import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

/*
  optimizar y arreglar la funcionalidad de autoscroll 
  1 hacer un hook donde que permita hacer dicha funcionalidad para asi tener el codigo mas
  refactorizado posible, 
  trabajar lo responsive

*/

const Navbar = () => {
  const mobile = 768;
  const desktop = 1024;
  const desktopXl = 1400;

  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  const developer = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const aboutMe = () => {
    if (screen.width <= mobile) {
      window.scrollTo({ top: 520, left: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 870, left: 0, behavior: "smooth" });
    }
  };

  const proyects = () => {
    if (screen.width >= desktop || screen.width >= desktopXl) {
      window.scrollTo({ top: 1600, left: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 1050, left: 0, behavior: "smooth" });
    }
  };

  const contacto = () => {
    window.scrollTo({ top: 3500, left: 0, behavior: "smooth" });
  };

  return (
    <nav className={`navbar  ${scrollHeight > 20 ? "scrolling" : null}`}>
      <div className="menu-item sombra-navbar" onClick={developer}>
        Home
      </div>
      <div className="menu-item sombra-navbar" onClick={aboutMe}>
        {" "}
        Developer{" "}
      </div>
      <div className="menu-item sombra-navbar" onClick={proyects}>
        Proyects
      </div>
      <div className="menu-item sombra-navbar" onClick={contacto}>
        Contact
      </div>
    </nav>
  );
};

export default Navbar;

/*
  responsive en tailwind
  
  
  primero el tamaño de la pantalla despues la propiedad
  mb:black
  

  'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px)

*/
