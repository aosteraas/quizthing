import React, { useEffect } from 'react';
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
import { register, RegistrationActions } from '../store/registration';
import { Errors } from '../components/Registration';
import { useNavigate } from 'react-router';
import { AppRoute } from '../Routes';

export const Register = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { onChange, onBlur, values, errors: inputErrors, disabled } = useForm();
  const { loading, errors, success } = useSelector(
    (s: RootState) => s.registration,
  );
  // redirect and reset registration reducer state on success
  useEffect(() => {
    if (success) {
      dispatch(RegistrationActions.reset());
      navigate(`/${AppRoute.Registered}`);
    }
  }, [success, dispatch, navigate]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(register({ ...values }));
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
        <Errors errors={errors} />
        <FormControl isInvalid={inputErrors.email.length > 0}>
          <FormLabel htmlFor="email">{strings.emailLabel}</FormLabel>
          <Input
            type="email"
            id="email"
            name="email"
            aria-describedby="email-helper-text"
            value={values.email}
            onChange={onChange}
            onBlur={onBlur}
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
            name="username"
            aria-describedby="display-name-helper-text"
            placeholder={strings.displayNamePlaceHolder}
            value={values.displayName}
            onChange={onChange}
          />
          <FormHelperText id="display-name-helper-text">
            {strings.displayNameSubtext}
          </FormHelperText>
        </FormControl>

        <FormControl isInvalid={inputErrors.password.length > 0}>
          <FormLabel htmlFor="password">{strings.passwordLabel}</FormLabel>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder={strings.passwordPlaceHolder}
            value={values.password}
            onChange={onChange}
            onBlur={onBlur}
            errorBorderColor="red.300"
          />
          <FormErrorMessage>{inputErrors.password}</FormErrorMessage>
        </FormControl>

        <Button
          variant="outline"
          variantColor="blue"
          type="submit"
          isDisabled={disabled}
          isLoading={loading}
        >
          {strings.registerBtnLabel}
        </Button>
      </Stack>
    </Flex>
  );
};
