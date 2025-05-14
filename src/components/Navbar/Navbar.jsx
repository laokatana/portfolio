import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Nav, Hamburger, Menu, MenuItem, Overlay } from './Navbar.styled';

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
