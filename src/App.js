// src/App.js
import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { CssBaseline, Box } from '@mui/material';
import './App.css';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <Header />
      <Body />
      <Footer />
    </Box>
  );
}

export default App;
