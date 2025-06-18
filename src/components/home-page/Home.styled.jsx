import styled, { keyframes } from 'styled-components';

// Animación del texto
const transformando = keyframes`
  0%, 100% {
    opacity: 0.8;
    text-shadow: 0 0 5px rgba(187, 27, 27, 0.3);
  }
  25% {
    opacity: 1;
    text-shadow: 0 0 10px rgba(131, 39, 16, 0.7);
  }
  50% {
    opacity: 1;
    text-shadow: 2px 2px 7px #da2323;
  }
  75% {
    opacity: 1;
    text-shadow: 0 0 10px rgba(165, 62, 31, 0.7);
  }
`;

// Contenedor principal
export const ContainerHome = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Fondo full screen
export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 20px;
  background-image: url('/sobremi.gif');
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  z-index: -1;
`;

// Contenido centrado y responsivo
export const SectionHome = styled.section`
  width: 100%;
  text-align: center;
  margin-bottom: 7rem;

  @media (min-width: 768px) {
    margin-bottom: 6rem;
  }

  @media (min-width: 1024px) {
    margin-bottom: 8rem;
  }
`;

export const Title = styled.p`
  font-size: 2.25rem;
  font-weight: bold;
  color: rgba(201, 185, 42, 0.91);
  text-shadow: 3px 3px 3px #da2323;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

export const TextHome = styled.p`
  margin-top: 2rem;
  font-size: 1.25rem;
  color: rgba(201, 185, 42, 0.91);
  animation: ${transformando} 5s infinite;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
