import { Box, Text, Image } from '@chakra-ui/react';
import React from 'react';

const Cards = ({ data }) => {
  return (
    <Box>
      <Text color="black">{data.Title}</Text>
      <Box w="300px" h="300px" borderRadius="12px">
        <Image src={data.Poster} />
        {console.log(data.Poster)}
      </Box>
    </Box>
  );
};

export default Cards;
