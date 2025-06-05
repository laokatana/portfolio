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
          A lo largo de mi formación autodidacta he trabajado en proyectos
          personales con el objetivo de afianzar conceptos clave del desarrollo
          web, tanto en frontend como en backend. Estas experiencias me
          permitieron aplicar principios fundamentales como la lógica de
          programación, la manipulación eficiente del DOM, el consumo de APIs
          externas, el manejo de estado, y la estructuración de arquitecturas
          escalables y mantenibles.
          <br />
        </p>
      </Description>
      <Slider slides={slideItems} />
      <Description>
        <p>
          Cada proyecto fue una oportunidad para aplicar lo aprendido, resolver
          problemas reales y mejorar mi forma de pensar el código. Más allá de
          las herramientas, siempre busqué crear soluciones claras, útiles y
          reutilizables. Estoy abierto a nuevos desafíos, aprender en equipo y
          aportar lo que sé. Si tenés una idea, charlamos.
          <br />
          ¡Gracias por pasar por mi portfolio!
        </p>
      </Description>
    </SectionContainer>
  );
});

export default ProjectsSection;
