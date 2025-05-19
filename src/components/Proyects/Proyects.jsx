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
          A lo largo de mi formación y experiencia autodidacta, he desarrollado
          proyectos que reflejan mi dominio en distintas tecnologías y enfoques.
          Entre ellos destacan: <br /> API de Autores Proyecto backend
          desarrollado con Node.js, Express y MongoDB. Implementa una API REST
          para gestión de autores con operaciones CRUD, validaciones y
          arquitectura modular orientada a buenas prácticas.
          <br />
          Cotizador de Criptomonedas App desarrollada con React y Styled
          Components . Permite consultar en tiempo real el valor de distintas
          criptomonedas, integrando consumo de API externa, manejo de estado y
          componentes reutilizables. <br />
          Anotador de Tareas Aplicación simple hecha con HTML, CSS y JavaScript
          puro, enfocada en la gestión básica de tareas. Nació durante mis
          primeros pasos en el desarrollo y fue clave para afianzar lógica de
          programación, manipulación del DOM y almacenamiento local. <br />
          Estoy en constante búsqueda de nuevos desafíos y oportunidades para
          aplicar mis habilidades y seguir aprendiendo. Si deseas conocer más
          sobre mis proyectos o discutir una posible colaboración, no dudes en
          contactarme. Estoy aquí para ayudarte a llevar tus ideas al siguiente
          nivel. <br />
          ¡Gracias por visitar mi portfolio!
          <br />
        </p>
      </Description>
      <Slider slides={slideItems} />
    </SectionContainer>
  );
});

export default ProjectsSection;
