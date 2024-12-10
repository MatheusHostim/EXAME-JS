import React, { useState } from 'react';
import styled from 'styled-components';

const ArrayContainer = styled.div`
  margin: 20px;
  padding: 20px;
  background: linear-gradient(145deg, #e6e6e6, #ffffff);
  color: #333;
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
  border: 1px solid #ccc;
  background-color: #fff;
  color: #333;
  font-size: 16px;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 12px 24px;
  background-color: #4caf50;
  color: #fff;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #45a049;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const RemoveButton = styled(Button)`
  background-color: #ff4d4d;

  &:hover {
    background-color: #e04444;
  }
`;

const ArrayList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
  text-align: left;
`;

const ArrayItem = styled.li`
  padding: 12px;
  margin: 10px 0;
  border-radius: 12px;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

const Price = styled.span`
  font-weight: bold;
  color: #4caf50;
  margin-top: 5px;
`;

const SectionTitle = styled.h3`
  margin-top: 20px;
  color: #333;
  font-size: 18px;
`;

function ArrayPage() {
  
  const [item, setItem] = useState('');
  const [price, setPrice] = useState('');
  const [array, setArray] = useState([
    { item: 'Mouse Gamer', price: 267 },
    { item: 'Sabonete', price: 3 }
  ]);

  const addItemToArray = () => {
    if (item && price) {
      setArray([...array, { item, price }]);
      setItem('');
      setPrice('');
    }
  };

  const removeItemFromArray = (index) => {
    const updatedArray = array.filter((_, i) => i !== index);
    setArray(updatedArray);
  };

  const filteredArrayMoreThan10 = array.filter((arrItem) => arrItem.price > 10);

  const filteredArrayLessThanOrEqual10 = array.filter((arrItem) => arrItem.price <= 10);

  return (
    <ArrayContainer>
      <h2>Gerenciador de Itens com Preços</h2>
      <h3>ArrayPage</h3>
      <p>Exemplo de filtro e map.</p>
      <h2>Insira os produtos que deseja colocar à venda em seu mercado virtual</h2>
      <div>
        <Input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Digite o nome do item"
        />
        <Input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Digite o preço"
        />
      </div>
      <Button onClick={addItemToArray}>Adicionar</Button>

      
      <SectionTitle>Itens com preço maior que R$ 10</SectionTitle>
      <ArrayList>
        {filteredArrayMoreThan10.map((arrItem, index) => (
          <ArrayItem key={index}>
            <ItemDetails>
              <span>{arrItem.item}</span>
              <Price>R$ {arrItem.price}</Price>
            </ItemDetails>
            <RemoveButton onClick={() => removeItemFromArray(index)}>Remover</RemoveButton>
          </ArrayItem>
        ))}
      </ArrayList>

      
      <SectionTitle>Itens com preço menor ou igual a R$ 10</SectionTitle>
      <ArrayList>
        {filteredArrayLessThanOrEqual10.map((arrItem, index) => (
          <ArrayItem key={index}>
            <ItemDetails>
              <span>{arrItem.item}</span>
              <Price>R$ {arrItem.price}</Price>
            </ItemDetails>
            <RemoveButton onClick={() => removeItemFromArray(index)}>Remover</RemoveButton>
          </ArrayItem>
        ))}
      </ArrayList>
    </ArrayContainer>
  );
}

export default ArrayPage;