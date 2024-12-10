import React, { useState } from 'react';
import styled from 'styled-components';

const DateContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  color: #fff;
  background: url("./public/calendario_mensal_exemplo.png") no-repeat center center;
  background-size: cover;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 15px;
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: #fff;
  margin-bottom: 5px;
`;

const Subtitle = styled.p`
  color: #fff;
  font-size: 16px;
  text-align: center;
  margin-top: 0;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

const InputWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 15px;
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  margin-top: 15px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;  
  text-align: center;
`;

const Input = styled.input`
  padding: 8px;
  margin: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
  box-sizing: border-box; 
`;

const CurrentDateWrapper = styled.div`
  padding: 5px 10px;
  border: 1px solid white;
  border-radius: 5px;
  margin: 10px 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: inline-block;
`;

const CurrentDate = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const DaysLabel = styled.p`
  color: #fff;
  font-size: 16px;
  margin-top: 10px;
  text-align: center;
`;

function DatePage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [days, setDays] = useState(0);

  const addDays = (days) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + days);
    setCurrentDate(newDate);
  };

  const handleDaysChange = (e) => {
    setDays(e.target.value);
  };

  const addCustomDays = () => {
    addDays(parseInt(days, 10) || 0);
  };

  return (
    <DateContainer>
      <TitleWrapper>
        <Title>Data Page</Title>
        <Subtitle>Exibe a data atual e permite manipulações como adição de dias.</Subtitle>
      </TitleWrapper>
      <CurrentDateWrapper>
        <CurrentDate>Data atual: {currentDate.toLocaleString()}</CurrentDate>
      </CurrentDateWrapper>
      <Button onClick={() => addDays(1)}>Adicionar 1 dia</Button>
      <Button onClick={() => addDays(-1)}>Subtrair 1 dia</Button>

      <InputWrapper>
        <DaysLabel>Quantidade de dias a mais ou a menos:</DaysLabel>
        <Input 
          type="number" 
          value={days} 
          onChange={handleDaysChange} 
          placeholder="Quantos dias?" 
        />
        <Button onClick={addCustomDays}>Adicionar/Subtrair dias</Button>
      </InputWrapper>
    </DateContainer>
  );
}

export default DatePage;