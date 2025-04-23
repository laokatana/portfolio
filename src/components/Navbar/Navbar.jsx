import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// animacion para los elementos del menu
// la animacion es un fade y un slide hacia la derecha
// la animacion es de 0.5s y se aplica a cada elemento del menu con un delay de 0.2s entre cada uno
// la animacion se aplica a los elementos del menu cuando el menu esta abierto
// la animacion se aplica a los elementos del menu cuando el menu esta cerrado
// la animacion se aplica a los elementos del menu cuando el menu esta abierto y se cierra
const fadeSlide = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// aqui definimos el navbar y sus estilos
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4rem;
  padding: 0 2rem;
  position: fixed;
  background-color: transparent;
  z-index: 10;

  &.scrolling {
    backdrop-filter: none;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

// aqui definimos el overlay y sus estilos
// el overlay es el fondo que aparece cuando el menu esta abierto
const Overlay = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: transparent;
  z-index: 99;

  @media (min-width: 768px) {
    display: none;
  }
`;

// aqui definimos el menu y sus estilos
// el menu es el contenedor de los elementos del menu
// tanto su mediaquerys como su animacion y su posicion
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${({ open }) => (open ? "100%" : "70%")};
  background: transparent;
  padding: 4rem 2rem;
  transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;
  backdrop-filter: none;
  z-index: 100;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 15rem;
    width: 100%;
    height: auto;
    position: static;
    background: transparent;
    transform: none;
    padding: 0;
    backdrop-filter: none;
  }
`;
//aqui definimos el menu item y sus estilos
// el menu item es cada uno de los elementos del menu
// tanto su mediaquerys como su animacion y su posicion
const MenuItem = styled.div`
  color: #fcd34d;
  cursor: pointer;
  text-shadow: 5px 5px 8px #da2323;
  transition: all 0.2s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  width: fit-content;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;

  opacity: 0;
  animation: ${fadeSlide} 0.5s forwards;
  animation-delay: ${({ index }) => index * 0.2}s;

  &:hover {
    color: #facc15;
    text-shadow: 5px 5px 8px #da2323;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
    opacity: 0.8;
    transition: transform 0.05s ease, opacity 0.05s ease;
  }

  @media (min-width: 992px) {
    opacity: 1;
    animation: none;
    margin-bottom: 0;
    border-bottom: none;
    padding-bottom: 0;

    &:hover {
      transform: scale(1.1);
      color: #facc15;
      text-shadow: 5px 5px 8px #da2323;
    }

    &:active {
      transform: scale(0.95);
      opacity: 0.8;
    }
  }
`;
//aqui definimos el hamburger y sus estilos
// el hamburger es el icono que aparece cuando el menu esta cerrado
// tanto su mediaquerys como su animacion y su posicion
const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  z-index: 101;

  span {
    height: 3px;
    width: 25px;
    background: #fcd34d;
    margin: 4px 0;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  &.open span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  &.open span:nth-child(2) {
    opacity: 0;
  }

  &.open span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
  }

  @media (max-width: 992px) {
    display: flex;
  }
`;
//esta funcion es el navbar y su logica
// aqui esta la funciones de scroll para cada uno de los elementos del menu
// y su logica para abrir y cerrar el menu
// aqui esta la logica para el scroll y el menu
const Navbar = () => {
  const mobile = 768;
  const desktop = 1024;
  const desktopXl = 1400;

  const [scrollHeight, setScrollHeight] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollHeight(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > mobile && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  const handleClick = (callback) => {
    callback();
    setMenuOpen(false);
  };

  const home = () =>
    window.scrollTo(
      { top: 0, left: 0, behavior: "smooth" },
      console.log("home")
    );
  const aboutMe = () => {
    if (screen.width <= mobile) {
      window.scrollTo(
        { top: 520, left: 0, behavior: "smooth" },
        console.log("aboutMe")
      );
    } else {
      window.scrollTo(
        { top: 870, left: 0, behavior: "smooth" },
        console.log("aboutMe")
      );
    }
  };
  const proyects = () => {
    if (screen.width >= desktop || screen.width >= desktopXl) {
      window.scrollTo({ top: 1600, left: 0, behavior: "smooth" });
      console.log("proyects");
    } else {
      window.scrollTo(
        { top: 1050, left: 0, behavior: "smooth" },
        console.log("proyects")
      );
    }
  };
  const contacto = () =>
    window.scrollTo(
      { top: 3500, left: 0, behavior: "smooth" },
      console.log("contacto")
    );

  return (
    <>
      <Nav className={scrollHeight > 20 ? "scrolling" : ""}>
        <Hamburger
          className={menuOpen ? "open" : ""}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu open={menuOpen}>
          <MenuItem onClick={() => handleClick(home)}>Home</MenuItem>
          <MenuItem onClick={() => handleClick(aboutMe)}>Developer</MenuItem>
          <MenuItem onClick={() => handleClick(proyects)}>Proyects</MenuItem>
          <MenuItem onClick={() => handleClick(contacto)}>Contact</MenuItem>
        </Menu>
      </Nav>
      <Overlay open={menuOpen} onClick={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;
