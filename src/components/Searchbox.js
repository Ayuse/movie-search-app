import React from 'react';
import { Box, Text, Input } from '@chakra-ui/react';

const Searchbox = () => {
  const [value, setValue] = React.useState('');
  const handleChange = event => setValue(event.target.value);

  return (
    <Box m="30px">
      <Text mb="8px">Search: {value}</Text>
      <Input
        value={value}
        onChange={handleChange}
        placeholder="Search your movies here..."
        size="sm"
        w="100%"hj
      />
    </Box>
  );
};

export default Searchbox;
