import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  margin-bottom: 20px;
  padding: 10px;
  background: linear-gradient(145deg, #e6e6e6, #ffffff);
  border-radius: 12px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin: 0 15px;
`;

const StyledLink = styled(Link)`
  display: block;
  padding: 10px 20px;
  background-color: #646cff;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  font-size: 14px;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #535bf2;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

function Navigation() {
  return (
    <Nav>
      <NavList>
        <NavItem><StyledLink to="/">Início</StyledLink></NavItem>
        <NavItem><StyledLink to="/math">Calculadora</StyledLink></NavItem>
        <NavItem><StyledLink to="/date">Calendário</StyledLink></NavItem>
        <NavItem><StyledLink to="/array">Adicionar Itens</StyledLink></NavItem>
        <NavItem><StyledLink to="/object">Publicar vídeo</StyledLink></NavItem>
        <NavItem><StyledLink to="/localstorage">Publicar em rede social</StyledLink></NavItem>
        <NavItem><StyledLink to="/api">API</StyledLink></NavItem>
      </NavList>
    </Nav>
  );
}

export default Navigation;