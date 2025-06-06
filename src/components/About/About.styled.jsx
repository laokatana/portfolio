import styled from 'styled-components';
import { keyframes } from 'styled-components';

// Animación fade-slide del texto dentro del InfoBox
export const fadeSlide = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Contenedor principal
export const AboutContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-image: url('/barrio.gif');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: black;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 5rem 10px 2rem 10px;
  margin-top: rem;

  @media (max-width: 768px) {
    background-attachment: scroll;
    background-position: center top;
    padding-top: 3rem;
  }
`;

// Contenedor de todos los botones
export const ButtonSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  space-between: 2rem;
  margin-top: 6rem;

  @media (min-width: 768px) and (max-width: 985px) {
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
  }
`;

// Contenedor individual para cada botón + su InfoBox
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.4s ease; // <<< Hacemos que todo cambio sea suave
  overflow: hidden; // <<< Evita desbordes feos al abrir/cerrar
`;

// Estilo para cada botón
export const AboutButton = styled.button`
  padding: 0rem 1rem;
  font-size: 1.25rem;
  margin: 2.5rem;
  background-color: transparent;
  backdrop-filter: blur(10px);
  color: #fcd34d;
  border: 1px solid rgba(190, 138, 27, 0.51);
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    color: rgb(234, 236, 222);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 10px;
    border: 1px solid rgba(190, 138, 27, 0.51);
  }

  @media (min-width: 1536px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    width: auto;
    font-size: 1.25rem;
  }
`;

// Caja que se expande/colapsa con animación de altura
export const InfoBox = styled.div`
  max-height: ${({ $isActive }) => ($isActive ? '500px' : '0px')};
  overflow: hidden;
  transition: max-height 0.5s ease;
  width: 100%;
  text-align: center;

  // Estilos internos del contenido
  & > div {
    opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
    transform: ${({ $isActive }) =>
      $isActive ? 'translateY(0)' : 'translateY(-10px)'};
    transition: all 0.4s ease;
    backdrop-filter: blur(10px);
    background-color: rgba(10, 7, 0, 0.1);
    border: 1px solid rgba(190, 138, 27, 0.51);
    border-radius: 8px;
    color: #eaecee;
    margin-top: 1rem;
    padding: 1rem;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
`;
