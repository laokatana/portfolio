import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const ContenedorPrincipal = styled.div`
  position: relative;
  overflow: hidden;
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
  position: absolute;
  top: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Boton = styled.button`
  pointer-events: all;
  background: none;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  outline: none;
  width: 50px;
  height: 100%;
  text-align: center;
  position: absolute;
  transition: 0.3s ease all;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
    p {
      color: #daa89d;
    }
  }
  ${(props) => (props.$derecho ? 'right: 0' : 'left: 0')};
  p {
    font-size: 15px;
    filter: ${(props) =>
      props.$derecho
        ? 'drop-shadow(-2px 0px 0px #fff)'
        : 'drop-shadow(2px 0px 0px #fff)'};
  }

  @media (width: 320px) {
    font-size: 10px;
  }
`;

const TitleProyect = styled.p`
  background-color: black;
  font-size: 45px;
  text-transform: uppercase;
  padding-top: 40px;
  font-weight: 400;
  text-align: center;
  padding-bottom: 50px;
  color: #a5992d;
  text-shadow: 2px 2px 8px #ff0000;
`;

const Slider = () => {
  const slideshow = useRef(null);

  const next = () => {
    //comprobamos que el slideshow tenga elementos
    if (slideshow.current.children.length > 0) {
      //obtenemos el primer elemento del slideshow.
      const firstElement = slideshow.current.children[0];

      //establecemos la transicion de slideshow.
      slideshow.current.style.transition = `1000ms ease-out all`;

      const tamanioSlide = slideshow.current.children[0].offsetWidth;

      // Movemos el slideshow
      slideshow.current.style.transform = `translateX(-${tamanioSlide}px)`;

      const transicion = () => {
        // reiniciamos la posicion de slideshow.

        slideshow.current.style.transition = 'none';
        slideshow.current.style.transform = `translateX(0)`;

        // tomamos el primer elemento y lo mandamos al final.
        slideshow.current.appendChild(firstElement);

        slideshow.current.removeEventListener('transitionend', transicion);
      };

      // Evenlistener para cuando termina la animacion
      slideshow.current.addEventListener('transitionend', transicion);
    }
  };

  const previous = () => {
    if (slideshow.current.children.length > 0) {
      //obtenemos el ultimo elemento del slideshow.

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

  /*
  este bloque de codigo se encargaba del efecto automatico del slider
  pero lo desactive porque me bugea la pagina y no se porque

  useEffect(() => {
    let intervalo = setInterval(() => {
      next();
    }, 5000);

    //eliminamos los intervalos
    slideshow.current.addEventListener("mouseenter", () => {
      clearInterval(intervalo);
    });

    //volver a poner el intervalo cuando saquen el cursor del slideshow
    slideshow.current.addEventListener("mouseleave", () => {
      intervalo = setInterval(() => {
        next();
      }, 5000);
    });
  }, []);

  */

  return (
    <ContenedorPrincipal>
      <TitleProyect>Proyectos</TitleProyect>
      <ContenedorSlidehshow ref={slideshow}>
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
            <p>Proyecto del Programa ONE que impartio alura</p>
            <p>Anotador de tareas</p>
            <p>Herramientas: HTML,CSS, JavaScript</p>
          </TextoSlide>
        </Slide>

        <Slide>
          <a href="https://github.com/laokatana/API-de-Autores" target="_blank">
            <img src="/images/autores.jpg" alt="" />
          </a>

          <TextoSlide>
            <p>Programa IntegrarTec </p>
            <p>Curso: Programacion web Full stack, stack MERN</p>
            <p>
              Proyecto back-end: API de autores. Te dirige al repositorio de
              github
            </p>
            <p>Herramientas: NodeJs, MongoDB, Express</p>
          </TextoSlide>
        </Slide>
      </ContenedorSlidehshow>

      <Controles>
        <Boton onClick={previous}>
          {' '}
          <p> ← </p>{' '}
        </Boton>

        <Boton $derecho onClick={next}>
          {' '}
          <p> → </p>{' '}
        </Boton>
      </Controles>
    </ContenedorPrincipal>
  );
};

export default Slider;
