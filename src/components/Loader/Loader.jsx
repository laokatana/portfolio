// src/components/Loader.js
import React from 'react';
import {
  Container,
  ProgressText,
  ProgressBarContainer,
  ProgressBar,
} from './Loader.styled';
import usePreloadAssets from '../hooks/loaded';

const Loader = ({ children }) => {
  // Archivos que queremos precargar
  const assetsToLoad = [
    '/sobremi.gif',
    '/images/criptomania.jpg',
    '/images/task.jpg',
    '/images/autores.jpg',
  ];

  // pipi este Hook precarga los assets y devuelve si ya está listo y el progreso.
  const { isReady, progress } = usePreloadAssets(assetsToLoad);

  // Si no está listo, mostramos el loader
  if (!isReady) {
    return (
      <Container>
        <ProgressText>Cargando... {progress}%</ProgressText>
        <ProgressBarContainer>
          <ProgressBar $progress={progress} />
        </ProgressBarContainer>
      </Container>
    );
  }

  // Si ya cargó, renderiza los hijos normalmente
  return <>{children}</>;
};

export default Loader;
