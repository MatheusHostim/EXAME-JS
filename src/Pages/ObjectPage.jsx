import React, { useState } from 'react';
import styled from 'styled-components';

const ObjectContainer = styled.div`
  margin: 20px;
  padding: 20px;
  background: linear-gradient(145deg, #e6e6e6, #ffffff);  // Estilo de fundo
  color: ${({ theme }) => theme.text};
  border-radius: 16px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 12px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.inputBorder};
  background-color: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.inputText};
  font-size: 16px;
  box-sizing: border-box;
  transition: box-shadow 0.3s, border-color 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.inputFocus};
    outline: none;
    box-shadow: 0 0 8px rgba(100, 108, 255, 0.6); // Efeito de foco
  }
`;


const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  background-color: #4caf50;
  color: #fff;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #45a049;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

function ObjectPage() {
  const [person, setPerson] = useState({
    name: '',
    videoName: '',
    description: '',
    hashtags: ''
  });

  const handleChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    });
  };

  return (
    <ObjectContainer>
      <h2>Postar vídeo</h2>
      <p>ObjectPage</p>
      <p>Exemplo de manipulação de propriedades e valores de objetos.</p>

      <Input
        name="name"
        value={person.name}
        onChange={handleChange}
        placeholder="Nome do seu canal"
      />
      <Input
        name="videoName"
        value={person.videoName}
        onChange={handleChange}
        placeholder="Nome do vídeo"
      />
      <Input
        name="description"
        value={person.description}
        onChange={handleChange}
        placeholder="Descrição do vídeo"
      />
      <Input
        name="hashtags"
        value={person.hashtags}
        onChange={handleChange}
        placeholder="Hashtags"
      />

      <div>
        <p><strong>Nome do seu canal:</strong> {person.name}</p>
        <p><strong>Nome do vídeo:</strong> {person.videoName}</p>
        <p><strong>Descrição:</strong> {person.description}</p>
        <p><strong>Hashtags:</strong> {person.hashtags}</p>
      </div>

      <Button onClick={() => alert('O vídeo já se encontra disponível em seu canal para todos os públicos, parabéns!')}>Postar vídeo</Button>
    </ObjectContainer>
  );
}

export default ObjectPage;