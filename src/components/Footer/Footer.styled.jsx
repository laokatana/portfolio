import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const mezcladito2 = keyframes`
  0%, 100% {
    opacity: 1;
    transform: translateY(0);
  }
  50% {
    opacity: 0.7;
    transform: translateY(1px);
  }
`;

export const FooterContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 10rem;
  height: 100%;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url('/sobremi.gif');
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
    background-attachment: fixed;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 770px) {
    min-height: auto;
  }
`;

export const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1.5rem;
  padding: 1rem 5px;

  @media (max-width: 768px) {
    height: auto;
    padding-top: 4rem;
    margin-top: 1rem;
  }
`;

export const FooterTitle = styled.p`
  font-size: 3rem;
  color: rgba(201, 185, 42, 0.91);
  text-shadow: 1px 1px 1px #da2323;
  text-align: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }

  @media (max-width: 480px) {
    font-size: 2.8rem;
  }
`;

export const FooterItem = styled.a`
  color: #e2d9e4;
  text-decoration: none;
  position: relative;
  &:hover {
    color: #fcd34d;
    text-shadow: 1px 1px 1px #da2323;
    border-radius: 5px;
    padding: 0.2rem;
    border: 1px solid rgba(190, 138, 27, 0.51);
    transition: all 0.3s ease-in-out;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterText = styled.div`
  color: rgb(245, 240, 247);
  text-align: center;
  font-size: 1.25rem;
  padding: 0 10px;
  margin-top: 3rem;
  animation: ${mezcladito2} 2s ease-in-out infinite;
  animation-delay: 0.5s;
  text-shadow: 1px 1px 1px rgb(231, 216, 216);

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
  max-width: 450px;
  background-color: transparent;
  border-radius: 10px;
  border: 1px solid rgba(190, 138, 27, 0.51);
  color: #f5f5f5;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 1rem;
  }
  @media (max-width: 480px) {
    max-width: 100%;
    padding: 0.5rem;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  gap: 0.5rem;
  color: #fcd34d;
  text-shadow: 1px 1px 1px #da2323;
  F @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const Input = styled.input`
  padding: 0.75rem;
  border-radius: 5px;
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: 1rem;
  border: 1px solid rgba(190, 138, 27, 0.51);

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const TextArea = styled.textarea`
  padding: 0.75rem;
  border-radius: 5px;
  border: none;
  background-color: transparent;
  border: 1px solid rgba(190, 138, 27, 0.51);
  color: #fff;
  font-size: 1rem;
  resize: none;
`;

export const SubmitButton = styled.button`
  background-color: transparent;
  color: rgb(212, 209, 200);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  font-size: 1.5rem;
  border: 1px solid rgba(190, 138, 27, 0.51);

  &:hover {
    background-color: rgba(224, 174, 11, 0.91);
    font-weight: bold;
    color: #fff;
  }
`;

export const StickyFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: transparent;
  color: #fcd34d;
  padding: 10px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  z-index: 999;

  svg {
    margin-right: 6px;
    font-size: 14px;
  }

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
    font-size: 14px;

    svg {
      font-size: 16px;
    }
  }
`;

export const FooterTextBlock = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 12px;

  a {
    color: white;
    font-size: 18px;

    &:hover {
      color: #ffa500;
    }
  }

  @media (min-width: 768px) {
    gap: 16px;

    a {
      font-size: 20px;
    }
  }
`;
