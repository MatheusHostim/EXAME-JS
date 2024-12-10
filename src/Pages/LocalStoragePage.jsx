import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Container com o estilo de fundo e bordas
const LocalStorageContainer = styled.div`
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

// Estilo do input com borda e efeitos ao focar
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

// Estilo do botão com efeito hover
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

const MotivationalText = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text};
`;

function LocalStoragePage() {
  const [storedValue, setStoredValue] = useState('');

  const saveToLocalStorage = () => {
    localStorage.setItem('myValue', storedValue);
  };

  const loadFromLocalStorage = () => {
    setStoredValue(localStorage.getItem('myValue') || '');
  };

  useEffect(() => {
    loadFromLocalStorage();
  }, []);

  return (
    <LocalStorageContainer>
      <h2>Publique sua frase motivadora diária</h2>
      <p>LocalStoragePage</p>
      <p>Exemplo de formulário para salvar e recuperar dados.</p>
      <p>O que você inserir  e salvar continuará na página mesmo após você trocar de uma seção do site para outra.</p>
      <Input
        type="text"
        value={storedValue}
        onChange={(e) => setStoredValue(e.target.value)}
        placeholder="Digite algo"
      />
      <Button onClick={saveToLocalStorage}>Salvar</Button>
      <MotivationalText>Frase motivadora: {storedValue}</MotivationalText>
    </LocalStorageContainer>
  );
}

export default LocalStoragePage;