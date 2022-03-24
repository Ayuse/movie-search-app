import React from 'react';
import { Box } from '@chakra-ui/react';

export default function header() {
  return (
    <Box bg="#292929" w="100%" p={4} color="white">
      <Box p="10px" textAlign="center" w="10%" border="1px" borderColor="white">
        MyTestApp
      </Box>
    </Box>
  );
}
