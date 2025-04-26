import React from "react";
import styled, { keyframes } from "styled-components";


const transformando = keyframes`
  0%, 100% {
    opacity: 0.8;
    text-shadow: 0 0 5px rgba(187, 27, 27, 0.3);
  }
  
  25% {
    opacity: 1;
    text-shadow: 0 0 10px rgba(131, 39, 16, 0.7);
  }
  50% {
    opacity: 1;
    text-shadow: 2px 2px 7px #da2323;
  }

  75% {
    opacity: 1;
    text-shadow: 0 0 10px rgba(165, 62, 31, 0.7);
  }


`;

const ContainerHome = styled.div`
  min-height: 100vh;
  width: 100%;
  background-image: url("/sobremi.gif");
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-attachment: fixed;


  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SectionHome = styled.section`
  width: 100%;
  margin: 0 auto;
  margin-top: 5rem;
`;

const Title = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: rgba(201, 185, 42, 0.91);
  text-align: center;
  text-shadow: 3px 3px 3px #da2323;
  margin: 0.5rem 0;

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

const TextHome = styled.p`
  margin-top: 4.5rem;
  margin-bottom: 12rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  text-align: center;
  color: rgba(201, 185, 42, 0.91);
  padding: 9px;
  animation: ${transformando} 5s infinite;

  @media (min-width: 1280px) {
    margin-top: 6rem;
  }
`;

const MarcaOculta = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 80px;
  height: 30px;
  background-color: black; // o el color que se camufle mejor
  z-index: 2;
`;

const Developer = () => {
  return (
    <ContainerHome>
      <SectionHome>
        <Title>LAO</Title>
        <Title>LARRAGUETA</Title>
        <TextHome>Software Developer</TextHome>
      </SectionHome>
    </ContainerHome>
  );
};

export default Developer;
