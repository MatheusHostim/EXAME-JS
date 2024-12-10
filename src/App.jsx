import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import HomePage from './Pages/HomePage';
import MathPage from './Pages/MathPage';
import DatePage from './Pages/DatePage';
import ArrayPage from './Pages/ArrayPage';
import ObjectPage from './Pages/ObjectPage';
import LocalStoragePage from './Pages/LocalStoragePage';
import APIFetchPage from './Pages/APIFetchPage';
import Navigation from './components/Navigation';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #fff; /* Tema claro fixo */
  color: #333; /* Cor do texto */
  padding: 20px;
  box-sizing: border-box;
  position: relative;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/math" element={<MathPage />} />
          <Route path="/date" element={<DatePage />} />
          <Route path="/array" element={<ArrayPage />} />
          <Route path="/object" element={<ObjectPage />} />
          <Route path="/localstorage" element={<LocalStoragePage />} />
          <Route path="/api" element={<APIFetchPage />} /> 
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;