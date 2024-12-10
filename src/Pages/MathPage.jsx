import React, { useState } from 'react';
import styled from 'styled-components';

const MathContainer = styled.div`
  margin: 20px;
  padding: 20px;
  background: linear-gradient(145deg, #e6e6e6, #ffffff);
  color: ${({ theme }) => theme.text};
  border-radius: 16px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
`;

const Input = styled.input`
  margin: 10px 5px;
  padding: 12px;
  width: calc(50% - 10px);
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
    box-shadow: 0 0 8px rgba(100, 108, 255, 0.6);
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 5px;
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

const CalculatorContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  border-radius: 16px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
`;

const ResultText = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  margin-top: 15px;
`;

function MathPage() {
  const [number, setNumber] = useState(0);
  const [operand1, setOperand1] = useState('');
  const [operand2, setOperand2] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = (operation) => {
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult('Use apenas números.');
      return;
    }

    let calcResult;
    switch (operation) {
      case '+':
        calcResult = num1 + num2;
        break;
      case '-':
        calcResult = num1 - num2;
        break;
      case '*':
        calcResult = num1 * num2;
        break;
      case '/':
        calcResult = num2 !== 0 ? num1 / num2 : 'Não é possível dividir 0...';
        break;
      default:
        calcResult = 'Inválido';
    }
    setResult(calcResult);
  };

  return (
    <MathContainer>
      <h2>Operações Matemáticas</h2>
      <h>MathPage</h>
      <p>Demonstra cálculos simples, como raiz quadrada e potência.</p>
      <Input 
        type="number" 
        value={number} 
        onChange={(e) => setNumber(parseFloat(e.target.value))} 
        placeholder="Digite um número"
      />
      <ResultText>Raiz quadrada: {Math.sqrt(number).toFixed(2)}</ResultText>
      <ResultText>Potência de 2: {Math.pow(number, 2)}</ResultText>
      <ResultText>Número arredondado: {Math.round(number)}</ResultText>

      <CalculatorContainer>
        <h3>Calculadora</h3>
        <Input
          type="number"
          placeholder="Primeiro número"
          value={operand1}
          onChange={(e) => setOperand1(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Segundo número"
          value={operand2}
          onChange={(e) => setOperand2(e.target.value)}
        />
        <div>
          <Button onClick={() => handleCalculate('+')}>+</Button>
          <Button onClick={() => handleCalculate('-')}>-</Button>
          <Button onClick={() => handleCalculate('*')}>*</Button>
          <Button onClick={() => handleCalculate('/')}>/</Button>
        </div>
        {result !== null && <ResultText>Resultado: {result}</ResultText>}
      </CalculatorContainer>
    </MathContainer>
  );
}

export default MathPage;