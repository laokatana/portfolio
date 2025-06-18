import { useState } from 'react';
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
    '¡Hola! Soy Lao, un desarrollador apasionado por construir soluciones con código. ' +
    'Más allá de las tecnologías, creo en el trabajo bien hecho: limpio, escalable y con foco en el usuario. ' +
    'Soy autodidacta por convicción, curioso por naturaleza y siempre estoy aprendiendo algo nuevo. ' +
    'Disfruto tanto de resolver problemas técnicos complejos como de trabajar en equipo, comunicándome de forma clara y empática. ' +
    'Cuando no estoy programando, probablemente esté explorando nuevas herramientas, optimizando proyectos o colaborando en ideas innovadoras. ' +
    'Mi meta es seguir creciendo mientras aporto valor real.',

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
