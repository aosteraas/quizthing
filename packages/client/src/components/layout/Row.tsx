import React from 'react';
import { Flex, FlexProps } from '@chakra-ui/core';

export const Row = ({ children, ...rest }: FlexProps) => (
  <Flex flexDir="row" width="100%" {...rest}>
    {children}
  </Flex>
);
