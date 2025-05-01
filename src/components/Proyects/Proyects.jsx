import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styled from 'styled-components';

// ======== STYLED COMPONENTS ======== //

const SectionContainer = styled.section`
  background-color: black;
  width: 100%;
  min-height: 100vh;
  padding: 60px 20px;
  margin: 0 auto;
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
  max-width: 900px;
  margin: 0 auto 40px auto;
  text-align: justify;
  font-size: 18px;
  line-height: 1.6;
  padding: 0 20px;
  color: #e0e0c7;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContenedorPrincipal = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: 30px;
`;

const ContenedorSlidehshow = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Slide = styled.div`
  background-color: black;
  min-width: 100%;
  transition: 0.3s ease all;
  z-index: 9;
  max-height: 500px;
  position: relative;
  img {
    width: 100%;
    vertical-align: top;
  }
`;

const TextoSlide = styled.div`
  background: rgba(0, 0, 0, 0.5);
  color: #ceb029;
  text-shadow: 2px 2px 8px #ff0000;
  width: 100%;
  padding: 10px 60px;
  text-align: center;
  position: absolute;
  bottom: 0;
  @media screen and (max-width: 700px) {
    position: relative;
  }
`;

const Controles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Boton = styled.button`
  pointer-events: all;
  background: transparent;
  color: white;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  outline: none;
  width: 75px;
  height: 25%;
  text-align: center;
  position: absolute;
  transition: 0.3s ease all;
  &:hover {
    background: rgba(218, 183, 87, 0.8);
    color: black;

    p {
      color: rgb(12, 12, 12);
    }
  }
  ${(props) => (props.$derecho ? 'right: 0' : 'left: 0')};
  p {
    font-size: 25px;
    filter: ${(props) =>
      props.$derecho
        ? 'drop-shadow(-2px 0px 0px #aa0000)'
        : 'drop-shadow(2px 0px 0px #aa0000)'};
  }
`;

// ========== SLIDER COMPONENT ========== //

const Slider = ({ slides }) => {
  const slideshow = useRef(null);

  const next = () => {
    if (slideshow.current.children.length > 0) {
      const firstElement = slideshow.current.children[0];
      slideshow.current.style.transition = `1000ms ease-out all`;
      const tamanioSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamanioSlide}px)`;

      const transicion = () => {
        slideshow.current.style.transition = 'none';
        slideshow.current.style.transform = `translateX(0)`;
        slideshow.current.appendChild(firstElement);
        slideshow.current.removeEventListener('transitionend', transicion);
      };
      slideshow.current.addEventListener('transitionend', transicion);
    }
  };

  const previous = () => {
    if (slideshow.current.children.length > 0) {
      const index = slideshow.current.children.length - 1;
      const ultimateElement = slideshow.current.children[index];
      slideshow.current.insertBefore(
        ultimateElement,
        slideshow.current.firstChild
      );
      slideshow.current.style.transition = 'none';
      const tamanioSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamanioSlide}px)`;
      setTimeout(() => {
        slideshow.current.style.transition = '1000ms ease-out all';
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  return (
    <ContenedorPrincipal>
      <ContenedorSlidehshow ref={slideshow}>{slides}</ContenedorSlidehshow>
      <Controles>
        <Boton onClick={previous}>
          <p>←</p>
        </Boton>
        <Boton $derecho onClick={next}>
          <p>→</p>
        </Boton>
      </Controles>
    </ContenedorPrincipal>
  );
};

// ========== MAIN COMPONENT ========== //

const ProjectsSection = () => {
  const slideItems = (
    <>
      <Slide>
        <a href="https://fluffy-dusk-ece8ea.netlify.app/" target="_blank">
          <img src="/images/criptomania.jpg" alt="" />
        </a>
        <TextoSlide>
          <p>Proyecto de forma Autodidacta</p>
          <p>Cotizador de criptomonedas</p>
          <p>Herramientas: React y Styled Components</p>
        </TextoSlide>
      </Slide>

      <Slide>
        <a
          href="https://laokatana.github.io/anotador-de-tareas/"
          target="_blank"
        >
          <img src="/images/task.jpg" alt="" />
        </a>
        <TextoSlide>
          <p>Proyecto del Programa ONE que impartió Alura</p>
          <p>Anotador de tareas</p>
          <p>Herramientas: HTML, CSS, JavaScript</p>
        </TextoSlide>
      </Slide>

      <Slide>
        <a href="https://github.com/laokatana/API-de-Autores" target="_blank">
          <img src="/images/autores.jpg" alt="" />
        </a>
        <TextoSlide>
          <p>Programa IntegrarTec</p>
          <p>Curso: Programación Web Full Stack (MERN)</p>
          <p>Proyecto backend: API de autores</p>
          <p>Herramientas: NodeJs, MongoDB, Express</p>
        </TextoSlide>
      </Slide>
    </>
  );

  return (
    <SectionContainer>
      <Title>Proyectos</Title>

      <Description>
        <p>
          En este espacio, comparto proyectos desarrollados a lo largo de mi
          aprendizaje, tanto en cursos como IntegrarTec (MERN Stack) y el
          programa ONE de Alura, como en proyectos autodidactas y experiencias
          reales. Durante estos proyectos, he aplicado una amplia variedad de
          tecnologías y herramientas. Las tecnologías utilizadas incluyen:{' '}
          <br />
          Frontend: HTML, CSS, React, JavaScript. <br />
          Backend: Node.js, Express, TypeScript. <br />
          Base de datos: MongoDB (no relacional), SQL (relacionales). Cada
          proyecto refleja una combinación de conocimientos técnicos adquiridos
          a través de cursos y la resolución de problemas reales, permitiéndome
          desarrollar soluciones funcionales y escalables mientras perfecciono
          mis habilidades en la gestión y optimización de bases de datos.
        </p>
      </Description>
      <Slider slides={slideItems} />
    </SectionContainer>
  );
};

export default ProjectsSection;
