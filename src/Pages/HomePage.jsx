import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: linear-gradient(145deg, #e6e6e6, #ffffff);  /* Estilo de fundo */
  color: ${({ theme }) => theme.text};
  border-radius: 16px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
  height: 300px; /* Mantendo o tamanho fixo */
`;

const Title = styled.h1`
  color: #4a0e4e;
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const Subtitle = styled.h2`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 20px;
`;

function HomePage() {
  return (
    <HomeContainer>
      <Title>Exame-JS</Title>
      <Subtitle>Teste suas habilidades em JavaScript de forma interativa</Subtitle>
    </HomeContainer>
  );
}

export default HomePage;