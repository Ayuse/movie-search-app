import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Header from './components/Header';
import Moviecards from './components/Moviecards';
import Hero from './components/Hero';
import Searchbox from './components/Searchbox';
import { SearchContext } from './components/Context';
function App() {
  const [value, setValue] = React.useState('spider');
  return (
    <SearchContext.Provider value={{ value, setValue }}>
      <ChakraProvider theme={theme}>
        <Header />
        <Hero />
        <Searchbox />
        <Moviecards />
      </ChakraProvider>
    </SearchContext.Provider>
  );
}

export default App;
