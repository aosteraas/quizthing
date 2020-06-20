import React, { useState, useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { login, AuthActions } from '../store/auth';
import { RootState } from '../store';
import { Errors } from '../components/Registration';

export const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  // reset auth state on mount no matter what.
  useEffect(() => {
    dispatch(AuthActions.reset());
  }, [dispatch]);

  const { success, errors, loading } = useSelector((s: RootState) => s.auth);

  useEffect(() => {
    if (success) {
      // todo
    }
  }, [success]);

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
        <Errors errors={errors} />
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
          isLoading={loading}
        >
          {strings.loginBtnLabel}
        </Button>
      </Stack>
    </Flex>
  );
};
