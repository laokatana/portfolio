// components/Projects/ProjectsSection.jsx
import React, { forwardRef } from 'react';
import { SectionContainer, Title, Description } from './Proyects.styled';
import Slider, { Slide, TextoSlide } from './Slider';

const ProjectsSection = forwardRef((props, ref) => {
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
    <SectionContainer ref={ref}>
      <Title>Proyectos</Title>
      <Description>
        {/* Descripción tuya */}
        <p>
          En este espacio comparto proyectos desarrollados a lo largo de mi
          aprendizaje, tanto en cursos como IntegrarTec (MERN Stack) y el
          programa ONE de Alura, como en proyectos autodidactas y experiencias
          reales. Las tecnologías utilizadas incluyen:
          <br />
          Frontend: HTML, CSS, React, JavaScript.
          <br />
          Backend: Node.js, Express, TypeScript.
          <br />
          Base de datos: MongoDB (no relacional), SQL (relacionales).
        </p>
      </Description>
      <Slider slides={slideItems} />
    </SectionContainer>
  );
});

export default ProjectsSection;
