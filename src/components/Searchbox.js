import React, { useContext } from 'react';
import { Box, Text, Input } from '@chakra-ui/react';
import { SearchContext } from './Context';

function Searchbox() {
  const { setValue, value } = useContext(SearchContext);

  const handleChange = event => setValue(event.target.value);

  return (
    <Box m="30px">
      <Text mb="8px">Search</Text>
      <Input
        value={value}
        onChange={handleChange}
        placeholder="Search your movies here..."
        size="sm"
        w="100%"
        hj
      />
    </Box>
  );
}

export default Searchbox;
