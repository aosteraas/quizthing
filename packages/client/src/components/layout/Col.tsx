import React from 'react';
import { PseudoBoxProps, PseudoBox } from '@chakra-ui/core';

const baseStyle: Omit<PseudoBoxProps, 'children'> = {
  flexDir: 'column',
  minWidth: 0,
  maxWidth: `100%`,
  flexBasis: { md: 0 },
  flexGrow: { md: 1 },
  width: {
    base: '100%',
  },
  paddingX: {
    base: `0.5rem`,
    md: `1rem`,
  },
};

export const Col = ({ children, ...rest }: PseudoBoxProps) => (
  <PseudoBox {...baseStyle} {...rest}>
    {children}
  </PseudoBox>
);
