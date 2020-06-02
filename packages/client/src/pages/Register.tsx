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
} from '@chakra-ui/core';
import { useForm } from '../hooks/useForm';
import { strings } from '../locale/en';

export const Register = () => {
  const onSubmit = () => {
    console.log('Registered successfully');
  };

  const { handleChange, handleSubmit, handleBlur, values, errors } = useForm(
    onSubmit,
  );

  return (
    <Flex
      m="0 auto"
      alignItems="center"
      as="form"
      onSubmit={handleSubmit}
      width={[
        '100%', // base
        '50%', // 480px upwards
        '25%', // 768px upwards
      ]}
    >
      <Stack w="100%" spacing={5}>
        <FormControl isInvalid={(errors.email?.length ?? 0) > 0}>
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
          <FormErrorMessage>{errors.email}</FormErrorMessage>
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

        <FormControl isInvalid={(errors.password?.length ?? 0) > 0}>
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
          <FormErrorMessage>{errors.password}</FormErrorMessage>
        </FormControl>

        <Button type="submit">{strings.registerBtnLabel}</Button>
      </Stack>
    </Flex>
  );
};
