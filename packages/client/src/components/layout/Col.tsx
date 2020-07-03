import React from 'react';
import { Box, BoxProps } from '@chakra-ui/core';
const sm = {
  width: `100%`,
};
const md = {
  flexBasis: 0,
  flexGrow: 1,
  minWidth: 0,
  maxWidth: `100%`,
};

const baseStyle: Omit<BoxProps, 'children'> = {
  flexDir: 'column',
  minWidth: 0,
  maxWidth: `100%`,
  flexBasis: { md: 0 },
  flexGrow: { md: 1 },
  width: {
    base: '100%',
  },
};

export const Col = ({ children, ...rest }: BoxProps) => (
  <Box {...baseStyle} {...rest}>
    {children}
  </Box>
);
