import React from 'react';
import { Flex, Stack, Heading } from '@chakra-ui/core';

export const Registered = () => {
  return (
    <Flex
      m="0 auto"
      alignItems="center"
      width={['100%', '50%', '25%']}
      flex="1"
    >
      <Stack w="100%" spacing={5}>
        <Heading pt={10}>Thanks for Registering</Heading>
      </Stack>
    </Flex>
  );
};
