import React from 'react';
import styled, { keyframes } from 'styled-components';
import { forwardRef } from 'react';
import {
  ContainerHome,
  Background,
  SectionHome,
  Title,
  TextHome,
} from './Home.styled.jsx';

const Home = forwardRef((props, ref) => {
  return (
    <ContainerHome ref={ref}>
      <Background />
      <SectionHome>
        <Title>LAO</Title>
        <Title>LARRAGUETA</Title>
        <TextHome>Software Developer</TextHome>
      </SectionHome>
    </ContainerHome>
  );
});

export default Home;
