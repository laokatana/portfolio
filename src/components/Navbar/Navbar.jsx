import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// animacion para los elementos del menu

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

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4rem;
  padding: 0 2rem;
  position: fixed;

  background: rgba(24, 22, 22, 0.2); /* */
  backdrop-filter: blur(1px);
  z-index: 10;

  &.scrolling {
    backdrop-filter: blur(1px);
  }
`;

const Overlay = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 99;
  pointer-events: none;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  height: 30vh;
  width: ${({ open }) => (open ? '100%' : '70%')};
  background: transparent;
  padding: 4rem 2rem;
  transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(-100%)')};
  transition:
    transform 0.3s ease-in-out,
    width 0.3s ease-in-out;
  z-index: 100;

  @media (min-width: 770px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 15rem;
    width: 100%;
    height: auto;
    position: static;
    transform: none;
    padding: 0;
    backdrop-filter: none;
    pointer-events: auto;
  }
`;

const MenuItem = styled.div`
  color: #fcd34d;
  cursor: pointer;
  text-shadow: 1px 1px 8px #da2323;
  transition: all 0.2s ease;
  width: fit-content;
  padding-bottom: 0.5rem;

  border-box: 1px #fcd34d;

  opacity: 0;
  animation: ${fadeSlide} 0.5s forwards;
  animation-delay: ${({ index }) => index * 0.2}s;

  &:hover {
    color: #facc15;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
    opacity: 0.8;
    transition:
      transform 0.05s ease,
      opacity 0.05s ease;
  }

  @media (min-width: 992px) {
    opacity: 1;
    animation: none;
    margin-bottom: 0;
    border-bottom: none;
    padding-bottom: 0;

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.95);
      opacity: 0.8;
    }
  }
`;

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
//este es el navbar y toda su logica con su respectiva funcionalidad
// aqui esta la funciones de scroll para cada uno de los elementos del referenciados

const Navbar = ({ scrollToRef, refs }) => {
  const mobile = 768;

  const [scrollHeight, setScrollHeight] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollHeight(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > mobile && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  const handleClick = (callback) => {
    callback();
    setMenuOpen(false);
  };

  return (
    <>
      <Nav className={scrollHeight > 20 ? 'scrolling' : ''}>
        <Hamburger
          className={menuOpen ? 'open' : ''}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </Hamburger>

        <Menu open={menuOpen}>
          <MenuItem
            onClick={() => handleClick(() => scrollToRef(refs.homeRef))}
          >
            Home
          </MenuItem>
          <MenuItem
            onClick={() => handleClick(() => scrollToRef(refs.aboutMeRef))}
          >
            About me
          </MenuItem>
          <MenuItem
            onClick={() => handleClick(() => scrollToRef(refs.proyectsRef))}
          >
            Proyects
          </MenuItem>
          <MenuItem
            onClick={() => handleClick(() => scrollToRef(refs.footerRef))}
          >
            Contact
          </MenuItem>
        </Menu>
      </Nav>
      <Overlay open={menuOpen} onClick={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;
