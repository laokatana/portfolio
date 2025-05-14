import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { forwardRef } from 'react';
import {
  AboutContainer,
  ButtonSection,
  ButtonWrapper,
  AboutButton,
  InfoBox,
} from './About.styled';

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
