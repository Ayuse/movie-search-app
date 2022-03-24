import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Header from './components/Header';
import Moviecards from './components/Moviecards';
import Hero from './components/Hero';
import Searchbox from './components/Searchbox';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Hero />
      <Searchbox />
      <Moviecards />
    </ChakraProvider>
  );
}

export default App;
