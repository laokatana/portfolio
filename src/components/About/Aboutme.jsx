import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { forwardRef } from 'react';

// Animación fade-slide del texto dentro del InfoBox
const fadeSlide = keyframes`
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
const AboutContainer = styled.div`
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
const ButtonSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 6rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
  }
`;

// Contenedor individual para cada botón + su InfoBox
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.4s ease; // <<< Hacemos que todo cambio sea suave
  overflow: hidden; // <<< Evita desbordes feos al abrir/cerrar
`;

// Estilo para cada botón
const AboutButton = styled.button`
  padding: 0rem 1rem;
  font-size: 1.25rem;
  margin: 2.5rem;
  background-color: transparent;
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
const InfoBox = styled.div`
  max-height: ${({ $isActive }) => ($isActive ? '500px' : '0px')};
  overflow: hidden;
  transition: max-height 0.5s ease; // <<< ¡Animamos el cambio de altura!
  width: 100%;
  text-align: center;

  // Estilos internos del contenido
  & > div {
    opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
    transform: ${({ $isActive }) =>
      $isActive ? 'translateY(0)' : 'translateY(-10px)'};
    transition: all 0.4s ease;
    background-color: rgba(190, 138, 27, 0.1);
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

// Diccionario con los textos de cada sección
const infoContent = {
  aboutMe: 'Aquí va la información sobre tu educación.',
  knowledge: 'Aquí va la información sobre tus conocimientos técnicos.',
};

// Componente principal
const About = forwardRef((props, ref) => {
  const [activeInfo, setActiveInfo] = useState(null); // Estado que guarda el botón activo

  // Maneja los clicks: activa uno o desactiva si es el mismo
  const handleButtonClick = (type) => {
    setActiveInfo((prev) => (prev === type ? null : type));
  };

  return (
    <AboutContainer ref={ref}>
      <ButtonSection>
        {/* Generamos cada botón dinámicamente */}
        {Object.keys(infoContent).map((key) => (
          <ButtonWrapper key={key}>
            <AboutButton onClick={() => handleButtonClick(key)}>
              {key.charAt(0).toUpperCase() + key.slice(1).replace('-', ' ')}
            </AboutButton>

            {/* InfoBox que expande o colapsa suavemente */}
            <InfoBox $isActive={activeInfo === key}>
              <div>{infoContent[key]}</div>
            </InfoBox>
          </ButtonWrapper>
        ))}
      </ButtonSection>
    </AboutContainer>
  );
});

export default About;
