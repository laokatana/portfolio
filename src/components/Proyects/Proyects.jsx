import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const projects = [
  {
    link: 'https://fluffy-dusk-ece8ea.netlify.app/',
    image: '/images/criptomania.jpg',
    description: [
      'Proyecto Autodidacta',
      'Cotizador de criptomonedas',
      'Herramientas: React y Styled Components',
    ],
  },
  {
    link: 'https://laokatana.github.io/anotador-de-tareas/',
    image: '/images/task.jpg',
    description: [
      'Proyecto Programa ONE - Alura',
      'Anotador de tareas',
      'Herramientas: HTML, CSS, JavaScript',
    ],
  },
  {
    link: 'https://github.com/laokatana/API-de-Autores',
    image: '/images/autores.jpg',
    description: [
      'Programa IntegrarTec',
      'API de autores (back-end)',
      'Herramientas: NodeJs, MongoDB, Express',
    ],
  },
];

// Styled Components (igual que antes)

const SectionContainer = styled.section`
  background-color: black;
  width: 100%;
  min-height: 100vh;
  padding: 60px 20px;
  text-align: center;
  color: #d8d085;
  text-shadow: 2px 2px 8px #ff0000;
`;

const Title = styled.h2`
  font-size: 45px;
  text-transform: uppercase;
  font-weight: 400;
  color: #a5992d;
  margin-bottom: 20px;
`;

const Description = styled.div`
  font-size: 18px;
  max-width: 800px;
  margin: 0 auto 40px auto;
`;

const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardsContainer = styled.div`
  display: flex;
  overflow-x: hidden;
  gap: 20px;
  padding: 20px 0;
  width: 90%;
  transition: transform 0.3s ease;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`;

const Card = styled.div`
  flex: 0 0 600px; /* Ancho aumentado */
  background-color: #1a1a1a;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.7);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.03);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardText = styled.div`
  padding: 15px;
  color: #ceb029;
  background: rgba(0, 0, 0, 0.7);
  p {
    margin: 5px 0;
  }
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 30px;
  cursor: pointer;
  padding: 10px;
  margin: 0 10px;
  transition: 0.3s;
  z-index: 10;
  position: relative;

  &:hover {
    color: #daa89d;
  }

  ${(props) =>
    props.$right &&
    `
    order: 2;
  `}
`;

const ProjectsSection = () => {
  const sliderRef = useRef(null);
  const scrollAmount = 600; // Aumentamos el tamaño del scroll para adaptarse al nuevo ancho de la tarjeta
  const totalCards = projects.length;

  const moveSlider = (direction) => {
    const container = sliderRef.current;
    const firstCard = container.firstElementChild;
    const lastCard = container.lastElementChild;

    if (direction === 'left') {
      if (container.scrollLeft === 0) {
        // Mover al último conjunto de tarjetas
        container.scrollTo({
          left: container.scrollWidth - container.clientWidth,
          behavior: 'smooth',
        });
      } else {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    } else {
      if (
        container.scrollLeft + container.clientWidth ===
        container.scrollWidth
      ) {
        // Mover al primer conjunto de tarjetas
        container.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  // Generar un arreglo de proyectos duplicado para el efecto infinito
  const duplicatedProjects = [...projects, ...projects, ...projects];

  return (
    <SectionContainer>
      <Title>Proyectos</Title>

      <Description>
        <p>
          En este espacio, comparto proyectos desarrollados a lo largo de mi
          aprendizaje, tanto en cursos como IntegrarTec (MERN Stack) y el
          programa ONE de Alura, como en proyectos autodidactas y experiencias
          reales. Durante estos proyectos, he aplicado una amplia variedad de
          tecnologías y herramientas,Las tecnologías utilizadas incluyen: <br />
          Frontend: HTML, CSS, React, JavaScript. <br />
          Backend: Node.js, Express, TypeScript. <br />
          Base de datos: MongoDB (no relacional), SQL (bases de datos
          relacionales). Cada proyecto refleja una combinación de conocimientos
          técnicos adquiridos a través de cursos y la resolución de problemas
          reales, permitiéndome desarrollar soluciones funcionales y escalables,
          mientras continúo perfeccionando mis habilidades en la gestión y
          optimización de bases de datos de diversas arquitecturas.
        </p>
      </Description>

      <CarouselContainer>
        <ArrowButton onClick={() => moveSlider('left')}>←</ArrowButton>

        <CardsContainer ref={sliderRef}>
          {duplicatedProjects.map((project, index) => (
            <Card key={index}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <CardImage src={project.image} alt="Proyecto" />
              </a>
              <CardText>
                {project.description.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </CardText>
            </Card>
          ))}
        </CardsContainer>

        <ArrowButton $right onClick={() => moveSlider('right')}>
          →
        </ArrowButton>
      </CarouselContainer>
    </SectionContainer>
  );
};

export default ProjectsSection;
