export interface Errors {
  [key: string]: any;
}

export const validateRegister = (values: {
  email: string;
  password: string;
}) => {
  let errors: Errors = {};
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password needs to be min 6 characters';
  }

  return errors;
};
