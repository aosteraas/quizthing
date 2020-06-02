import React from 'react';
import {
  FormControl,
  FormLabel,
  Button,
  FormErrorMessage,
  FormHelperText,
  Input,
  Stack,
} from '@chakra-ui/core';
import { useForm } from '../hooks/useForm';
import { validateRegister } from '../utils/validateRegister';
import { strings } from '../locale/en';

export const Register = () => {
  const submit = () => {
    console.log('Registered successfully');
  };

  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validateRegister,
  );

  return (
    <form onSubmit={handleSubmit} className="FormFields" noValidate>
      <Stack spacing={5}>
        <FormControl>
          <FormLabel htmlFor="email">{strings.emailLabel}</FormLabel>
          <Input
            type="email"
            id="email"
            name="email"
            aria-describedby="email-helper-text"
            value={values.email}
            onChange={handleChange}
          />
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

        <FormControl>
          <FormLabel htmlFor="password">{strings.passwordLabel}</FormLabel>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder={strings.passwordPlaceHolder}
            value={values.displayName}
            onChange={handleChange}
          />
        </FormControl>

        <Button type="submit">{strings.registerBtnLabel}</Button>
      </Stack>
    </form>
  );
};
