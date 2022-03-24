import React from 'react';
import { Box, Text } from '@chakra-ui/react';
// import cinema from './Rectangle5.png';

const Hero = () => {
  return (
    <Box w="100%" h="650px">
      <Box
        w="100%"
        h="100%"
        bgImage="url(/image.png)"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Text
          fontWeight="extrabold"
          fontFamily="DM Sans"
          color="white"
          fontSize="3em"
          p="5"
          m="0 auto"
        >
          Watch Something Incredible
        </Text>
      </Box>
    </Box>
  );
};

export default Hero;
