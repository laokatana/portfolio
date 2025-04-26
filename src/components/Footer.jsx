import React from "react";
import styled, { keyframes } from "styled-components";

// Animación mezcladito (para los links)
const mezcladito = keyframes`
  0% {
    color: #a5992d;
    text-shadow: 2px 2px 8px #ff0000;
  }
  50% {
    right: 1em;
  }
  65% {
    color: #c48220cb;
  }
  75% {
    color: #ccc90d;
    text-shadow: 2px 2px 8px #ff0000;
  }
  100% {
    color: #bd9616;
    text-shadow: 2px 2px 8px #ff0000;
  }
`;

// Animación mezcladito2 (para el título)
const mezcladito2 = keyframes`
  0%, 100% {
    opacity: 1;
    transform: translateY(0);
  }
  50% {
    opacity: 0.7;
    transform: translateY(px);
  }
`;

const FooterContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-image: url("../src/assets/footer4.gif");
  background-position: center top;
  background-size: 105%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding: 0 10px;

  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    background-size: 300%;
    background-attachment: scroll;
  }

  @media (max-width: 480px) {
    background-size: 350%;
  }
`;

const FooterSection = styled.section`
  color: #cbd5e1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  font-size: 1.5rem;
  padding: 0 10px;
  padding-bottom: 5rem;

  @media (max-width: 768px) {
    height: auto;
    padding-top: 4rem;
  }
`;

const FooterTitle = styled.p`
  font-size: 3rem;
  color: #cbd5e1;
  text-align: center;
  padding-bottom: 2.75rem;
  

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const FooterItem = styled.a`
  color: #e2d9e4;
  text-decoration: none;
  position: relative;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);
     color: #a5992d;
      text-shadow: 2px 2px 8px #ff0000;
  }
`;

const FooterText = styled.p`
  color: white;
  margin-top: 0.5rem;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <FooterTitle>Contacto</FooterTitle>

        <FooterItem
          href="https://www.linkedin.com/in/lautaro-larragueta/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </FooterItem>

        <FooterItem
          href="https://github.com/laokatana"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </FooterItem>

        <FooterItem
          href="mailto:lao.tech.software@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email
        </FooterItem>

        <FooterItem
          href="../../public/Lautaro Larragueta Full Stack.pdf"
          download="Larragueta Lautaro"
        >
          Descargar CV
        </FooterItem>

      </FooterSection>
      <FooterText>Design By Lao</FooterText>
      <FooterText>Email</FooterText>
    </FooterContainer>
  );
};

export default Footer;
