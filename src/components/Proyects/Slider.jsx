// components/Projects/Slider.jsx
import React, { useRef } from 'react';
import {
  ContenedorPrincipal,
  ContenedorSlidehshow,
  Slide,
  TextoSlide,
  Controles,
  Boton,
} from './Slider.styled';

const Slider = ({ slides }) => {
  const slideshow = useRef(null);

  const next = () => {
    if (slideshow.current.children.length > 0) {
      const firstElement = slideshow.current.children[0];
      slideshow.current.style.transition = `1000ms ease-out all`;
      const width = firstElement.offsetWidth;
      slideshow.current.style.transform = `translateX(-${width}px)`;

      const transitionEnd = () => {
        slideshow.current.style.transition = 'none';
        slideshow.current.style.transform = `translateX(0)`;
        slideshow.current.appendChild(firstElement);
        slideshow.current.removeEventListener('transitionend', transitionEnd);
      };
      slideshow.current.addEventListener('transitionend', transitionEnd);
    }
  };

  const previous = () => {
    if (slideshow.current.children.length > 0) {
      const lastElement =
        slideshow.current.children[slideshow.current.children.length - 1];
      slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);
      slideshow.current.style.transition = 'none';
      const width = lastElement.offsetWidth;
      slideshow.current.style.transform = `translateX(-${width}px)`;
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

export default Slider;
export { Slide, TextoSlide };
