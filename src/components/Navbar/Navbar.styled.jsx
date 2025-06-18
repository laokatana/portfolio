import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const fadeSlide = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Nav = styled.nav`
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

export const Overlay = styled.div`
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

export const Menu = styled.div`
  // Estilos base (menú cerrado en mobile)
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  height: 30vh;
  width: 100%;
  padding: 4rem 2rem;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  z-index: 100;
  overflow: hidden;

  // Transiciones separadas para mayor control
  transition:
    transform 0.4s cubic-bezier(0.22, 0.61, 0.36, 1),
    backdrop-filter 0.3s ease-out,
    background-color 0.3s ease-out;

  // Estado inicial (cerrado)
  backdrop-filter: blur(0);
  background-color: rgba(3, 3, 3, 0);

  // Estado abierto
  ${({ open }) =>
    open &&
    `
    backdrop-filter: blur(1px);
    background-color: rgba(3, 3, 3, 0.8);
    font-size: 1.2rem;
  `}

  // Estilos para desktop
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
    pointer-events: auto;
    background: transparent;
    backdrop-filter: none !important;
    transition: none !important;
  }
`;

export const MenuItem = styled.div`
  color: #fcd34d;
  cursor: pointer;
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

export const Hamburger = styled.div`
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
