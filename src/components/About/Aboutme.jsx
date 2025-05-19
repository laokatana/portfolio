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
  CONOCIMIENTOS:
    'Manejo tecnologías como JavaScript, TypeScript, HTML, CSS, React, Node.js y Express. Trabajo con bases de datos relacionales (SQL) y no relacionales (MongoDB), y utilizo herramientas como Git para control de versiones. Tengo conocimientos en redes y experiencia aplicando buenas prácticas de desarrollo tanto en frontend como backend.',

  SOBRE_MI:
    'Hola, soy Lao. Soy autodidacta, curioso y comprometido con la mejora constante. Como desarrollador, combino habilidades técnicas y blandas: buena comunicación, responsabilidad, adaptabilidad y enfoque práctico. Me gusta crear soluciones útiles, escribir código limpio y aplicar buenas prácticas. He complementado capacitaciones (ONE – Alura, IntegrarTec – MERN Stack) con proyectos reales y personales. Actualmente desarrollo nuevos proyectos que pronto estarán disponibles en este portfolio.',

  DESARROLLEMOS:
    'Si te interesó mi trabajo y creés que podemos colaborar en algún proyecto, no dudes en contactarme. Abajo vas a encontrar todos mis medios de contacto. Estoy abierto a nuevas oportunidades, propuestas y desafíos que me permitan seguir creciendo como desarrollador y aportar soluciones reales.',
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
