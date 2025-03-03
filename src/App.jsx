import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Container } from "react-bootstrap";
import { useState } from 'react'
import Appbar from './components/Appbar'
import AppRoutes from './AppRoutes'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Appbar />
      <Container style={{marginTop: "20px"}}>
        <AppRoutes />
      </Container>
    </BrowserRouter>
  );
}

export default App
