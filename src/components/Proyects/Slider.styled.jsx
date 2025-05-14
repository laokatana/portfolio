// components/Projects/Slider.styled.js
import styled from 'styled-components';

export const ContenedorPrincipal = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: 30px;
`;

export const ContenedorSlidehshow = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const Slide = styled.div`
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

export const TextoSlide = styled.div`
  background: rgba(0, 0, 0, 0.5);
  color: #ceb029;
  width: 100%;
  padding: 10px 60px;
  text-align: center;
  position: absolute;
  bottom: 0;
  @media screen and (max-width: 700px) {
    position: relative;
  }
`;

export const Controles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const Boton = styled.button`
  pointer-events: all;
  background: transparent;
  border: none;
  cursor: pointer;
  width: 75px;
  height: 25%;
  position: absolute;
  ${(props) => (props.$derecho ? 'right: 0' : 'left: 0')};

  p {
    font-size: 25px;
    color: white;
    filter: ${(props) =>
      props.$derecho
        ? 'drop-shadow(-2px 0px 0px #aa0000)'
        : 'drop-shadow(2px 0px 0px #aa0000)'};
  }

  &:hover {
    color: black;
    p {
      color: rgb(245, 225, 225);
    }
  }
`;
