import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Flex,
  Stack,
  Heading,
  Button,
} from '@chakra-ui/core';
import { strings } from '../locale/en';
import { useDispatch } from 'react-redux';
import { login } from '../store/auth';

export const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login({ user, password }));
  };

  const disabled = [user, password].every((x) => x.length === 0);

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
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </FormControl>
        <Button
          variant="outline"
          variantColor="blue"
          type="submit"
          isDisabled={disabled}
        >
          {strings.loginBtnLabel}
        </Button>
      </Stack>
    </Flex>
  );
};
