import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

const projects = [
  {
    link: "https://fluffy-dusk-ece8ea.netlify.app/",
    image: "/images/criptomania.jpg",
    description: [
      "Proyecto Autodidacta",
      "Cotizador de criptomonedas",
      "Herramientas: React y Styled Components",
    ],
  },
  {
    link: "https://laokatana.github.io/anotador-de-tareas/",
    image: "/images/task.jpg",
    description: [
      "Proyecto Programa ONE - Alura",
      "Anotador de tareas",
      "Herramientas: HTML, CSS, JavaScript",
    ],
  },
  {
    link: "https://github.com/laokatana/API-de-Autores",
    image: "/images/autores.jpg",
    description: [
      "Programa IntegrarTec",
      "API de autores (back-end)",
      "Herramientas: NodeJs, MongoDB, Express",
    ],
  },
];

// Styled Components
const SectionContainer = styled.section`
  background-color: black;
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
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  gap: 20px;
  padding: 20px 0;
  scroll-behavior: smooth;
  width: 90%;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`;

const Card = styled.div`
  flex: 0 0 600px; /* Ancho aumentado */
  background-color: #1a1a1a;
  border-radius: 15px;
  overflow: hidden;
  scroll-snap-align: center;
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
  const [autoSlide, setAutoSlide] = useState(true);
  const scrollAmount = 600; // Aumentamos el tamaño del scroll para adaptarse al nuevo ancho de la tarjeta

  const scroll = (direction) => {
    if (direction === "left") {
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    let intervalId;
    if (autoSlide) {
      intervalId = setInterval(() => {
        scroll("right");
      }, 1000); // Cambiar de slide cada 3 segundos
    }
    return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar el componente
  }, [autoSlide]);

  return (
    <SectionContainer>
      <Title>Proyectos</Title>

      <Description>
        <p>
          Aquí encontrarás proyectos realizados mediante cursos como IntegrarTec (MERN stack),
          Programa ONE de Alura y proyectos autodidactas. Herramientas: HTML, CSS, React, JavaScript, Node.js, Express, MongoDB.
        </p>
      </Description>

      <CarouselContainer
        onMouseEnter={() => setAutoSlide(false)} // Detener el auto slide cuando el mouse entra
        onMouseLeave={() => setAutoSlide(true)} // Reanudar el auto slide cuando el mouse sale
      >
        <ArrowButton onClick={() => scroll("left")}>←</ArrowButton>

        <CardsContainer ref={sliderRef}>
          {projects.map((project, index) => (
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

        <ArrowButton $right onClick={() => scroll("right")}>→</ArrowButton>
      </CarouselContainer>
    </SectionContainer>
  );
};

export default ProjectsSection;
