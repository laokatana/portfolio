import React from "react";
import styled from "styled-components";

// Definimos los estilos con styled-components

const Container = styled.div`
  background-color: black;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.p`
  font-size: 3rem;
  color: #fbbf24; /* amarillo-500 */
  text-align: center;
  text-shadow: 2px 2px 8px #ff0000;
  animation: loading 2s infinite, glow 1.5s ease-in-out infinite alternate;


  @keyframes loading {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes glow {
    0% {
      text-shadow: 0 0 10px rgba(184, 212, 59, 0.5), 0 0 20px rgba(212, 91, 91, 0.5), 0 0 30px rgba(141, 50, 50, 0.5);
    }
    100% {
      text-shadow: 0 0 20px rgb(192, 35, 35), 0 0 30px rgb(122, 15, 15), 0 0 40px rgb(228, 64, 64);
    }
  }

  @media (min-width: 768px) {
    font-size: 4rem; /* Más grande en pantallas grandes */
  }

  @media (min-width: 1024px) {
    font-size: 5rem; /* Más grande aún en pantallas más grandes */
  }
`;

const Loader = () => {
  return (
    <Container>
      <LoadingText>Loading...</LoadingText>
    </Container>
  );
};

export default Loader;