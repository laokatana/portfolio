import styled from 'styled-components';

export const SectionContainer = styled.section`
  background: black;
  width: 100%;
  min-height: 100vh;
  padding: 60px 20px;
  margin: 0 auto;
  text-align: center;
  color: #ceb029;
`;

export const Title = styled.h2`
  font-size: 45px;
  text-transform: uppercase;
  font-weight: 400;
  color: #a5992d;
  margin-bottom: 20px;
`;

export const Description = styled.div`
  max-width: 900px;
  margin: 0 auto 40px auto;
  text-align: justify;
  font-size: 18px;
  line-height: 1.6;
  padding: 0 20px;
  color: #e0e0c7;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
