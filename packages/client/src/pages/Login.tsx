import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Flex,
  Box,
  Stack,
  Heading,
  Button,
} from '@chakra-ui/core';
import { strings } from '../locale/en';
import { useDispatch } from 'react-redux';

export const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { user, password };
  };

  return (
    <Flex
      m="0 auto"
      alignItems="center"
      as="form"
      onSubmit={handleSubmit}
      width={['100%', '50%', '25%']}
      flex="1"
    >
      <Stack w="100%" spacing={5}>
        <Heading pt={10}>Log In</Heading>
        <FormControl>
          <FormLabel>Email or Username</FormLabel>
          <Input
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUser(e.target.value)
            }
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email or Username</FormLabel>
          <Input
            type="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </FormControl>
        <Button variant="outline" variantColor="blue" type="submit">
          {strings.loginBtnLabel}
        </Button>
      </Stack>
    </Flex>
  );
};
