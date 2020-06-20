import React from 'react';
import {
  FormControl,
  FormLabel,
  Button,
  FormErrorMessage,
  FormHelperText,
  Input,
  Stack,
  Flex,
  Heading,
} from '@chakra-ui/core';
import { useForm } from '../hooks/useForm';
import { strings } from '../locale/en';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../store';
import { register } from '../store/registration';

export const Register = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { handleChange, handleBlur, values, errors: inputErrors } = useForm();
  const { loading, errors } = useSelector((s: RootState) => s.registration);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(register({ ...values }));
    console.log('Registered successfully');
  };

  return (
    <Flex
      m="0 auto"
      alignItems="center"
      as="form"
      onSubmit={onSubmit}
      width={['100%', '50%', '25%']}
      flex="1"
    >
      <Stack w="100%" spacing={5}>
        <Heading pt={10}>Sign Up</Heading>
        <FormControl isInvalid={(inputErrors.email?.length ?? 0) > 0}>
          <FormLabel htmlFor="email">{strings.emailLabel}</FormLabel>
          <Input
            type="email"
            id="email"
            name="email"
            aria-describedby="email-helper-text"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            errorBorderColor="red.300"
          />
          <FormErrorMessage>{inputErrors.email}</FormErrorMessage>
          <FormHelperText id="email-helper-text">
            {strings.emailSubtext}
          </FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="display-name">
            {strings.displayNameLabel}
          </FormLabel>
          <Input
            type="text"
            id="display-name"
            name="displayName"
            aria-describedby="display-name-helper-text"
            placeholder={strings.displayNamePlaceHolder}
            value={values.displayName}
            onChange={handleChange}
          />
          <FormHelperText id="display-name-helper-text">
            {strings.displayNameSubtext}
          </FormHelperText>
        </FormControl>

        <FormControl isInvalid={(inputErrors.password?.length ?? 0) > 0}>
          <FormLabel htmlFor="password">{strings.passwordLabel}</FormLabel>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder={strings.passwordPlaceHolder}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            errorBorderColor="red.300"
          />
          <FormErrorMessage>{inputErrors.password}</FormErrorMessage>
        </FormControl>

        <Button variant="outline" variantColor="blue" type="submit">
          {strings.registerBtnLabel}
        </Button>
      </Stack>
    </Flex>
  );
};
