export interface Errors {
  email: string;
  password: string;
  [key: string]: any;
}
interface Validate {
  [key: string]: (input?: string) => undefined | string;
}

export const validateEmail = (value?: string) => {
  let error = '';
  if (!value) {
    error = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(value)) {
    error = `That doesn't look like a valid email`;
  }
  return error;
};

export const validatePassword = (value?: string) => {
  let error = '';
  if (!value) {
    error = 'Password is required';
  } else if (value.length < 6) {
    error = 'Password needs to be min 6 characters';
  }
  return error;
};

export const validate: Validate = {
  email: validateEmail,
  password: validatePassword,
};
