import styled from 'styled-components';
import { keyframes } from 'styled-components';

// Container principal del loader
export const Container = styled.div`
  background-color: black;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Texto de carga
export const ProgressText = styled.p`
  font-size: 2rem;
  color: #fbbf24;
  text-shadow: 2px 2px 8px #ff0000;
  margin-bottom: 20px;
`;

// Barra que envuelve la barra de progreso
export const ProgressBarContainer = styled.div`
  background-color: #333;
  width: 80%;
  height: 10px;
  border-radius: 10px;
  overflow: hidden;
`;

// Barra de progreso animada
export const ProgressBar = styled.div`
  background-color: #fbbf24;
  width: ${({ $progress }) => $progress}%;
  height: 100%;
  transition: width 3s ease-in-out;
`;
