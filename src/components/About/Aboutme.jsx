import { useState } from "react";
import styled from "styled-components";

// Container general
const AboutContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-image: url("/barrio.gif");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10px; /* para evitar que el texto se pegue a los bordes en pantallas pequeñas */

  @media (max-width: 768px) {
    background-attachment: scroll; /* para móviles, evitar bugs */
    background-position: center top;
`;
/* display: flex;
flex-direction: column;
align-items: center;
text-align: center;
padding: 12px;
background: rgba(0, 0, 0, 0.5); o background-color: #fff; etc. */

// Título principal
const AboutTitle = styled.p`
  margin-top: 20px;
  font-size: 2.25rem;
  line-height: 2.5rem;
  padding: 10rem;
  color: rgba(201, 185, 42, 0.91);

  /* Ejemplo de animación si querés reemplazar 
    'animacio-about-me' */
  /* animation: fadeIn 0.8s ease-in-out; */
`;

// Wrapper para los botones
const ButtonSection = styled.section`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

// Botón estilizado
const AboutButton = styled.button`
  padding: 0.5rem;
  font-size: 15px;
  margin: 3rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: none;
  background-color: #1f2937; /* gris oscuro tipo Tailwind bg-gray-800 */
  color: #fcd34d; /* amarillo tipo Tailwind text-yellow-400 */
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #facc15;
    color: #1f2937;
    transform: scale(1.05);
  }

  @media (min-width: 1536px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    width: auto;
    font-size: 1.25rem;
    margin: 0.25rem;
    padding-bottom: 2rem;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutTitle>About me</AboutTitle>

      <ButtonSection>
        <AboutButton onClick={() => console.log("educacion")}>
          Education
        </AboutButton>

        <AboutButton onClick={() => console.log("conocimientos")}>
          Technical knowledge
        </AboutButton>

        <AboutButton onClick={() => console.log("certificados")}>
          Certifications
        </AboutButton>
      </ButtonSection>
    </AboutContainer>
  );
};

export default About;
