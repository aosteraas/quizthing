import React from 'react';
import { Flex, Text } from '@chakra-ui/core';
import styled from '@emotion/styled';

const BigText = styled(Text)`
  transform: rotate(-7deg) skew(-7deg);
  width: 30%;
  font-weight: bold;
  text-shadow: -3px 3px black;
  /* border: 1px solid palevioletred; */
  background-color: palevioletred;
  padding-left: 0.25em;
  padding-right: 0.25em;
`;

export const Home = () => {
  return (
    <Flex align="center" justify="center" height="70vh" background="#4e54c8">
      <BigText fontSize="6xl" color="white">
        Have a Quiz Get a Quiz
      </BigText>
    </Flex>
  );
};
