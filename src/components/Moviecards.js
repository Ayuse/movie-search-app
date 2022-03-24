import React, { useEffect, useState, useContext } from 'react';
import { Box, Spinner, Center, Flex, List, HStack } from '@chakra-ui/react';
import Cards from './Cards';
import { SearchContext } from './Context';

function Moviecards() {
  const { value } = useContext(SearchContext);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(
        `https://www.omdbapi.com/?s=${value}&apikey=7b1a56c6`
      ).then(data => data.json());
      setMovies(data.Search);
      return { info: data.Search };
    };
    getData();
  }, [value]);

  const [movies, setMovies] = useState(null);
  if (!movies)
    return (
      <Center>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );
  return (
    <List>
      <HStack overflow="scroll">
        {movies.map(movie => (
          <Box m="30px">
            <Flex>
              <Cards data={movie} />
            </Flex>
          </Box>
        ))}
        {console.log(movies)}
      </HStack>
    </List>
  );
}

export default Moviecards;
