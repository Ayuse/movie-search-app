import { Box, Spinner, Center, Flex, List, HStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Cards from './Cards';

const Moviecards = () => {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(
      `https://www.omdbapi.com/?s=christmas&apikey=7b1a56c6`
    ).then(data => data.json());
    setMovies(data.Search);
    return { info: data.Search };
  };

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
          <Box>
            <Flex>
              <Cards data={movie} />
            </Flex>
          </Box>
        ))}
        {console.log(movies)}
      </HStack>
    </List>
  );
};

export default Moviecards;
