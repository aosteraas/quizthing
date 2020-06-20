import { useState } from 'react';
import { Errors, validate } from '../utils/validateRegister';

interface Validate {
  [key: string]: (input?: string) => undefined | string;
}

interface FormState {
  username: string;
  email: string;
  password: string;
  [key: string]: string;
}

const initialState: FormState = {
  username: '',
  email: '',
  password: '',
};

/**
 * Hook which can be reusable where-ever there is a form
 * @param callback
 * @param validate
 */
export const useForm = () => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  /**
   * Validates the input on blur
   * @param e focus event
   */
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const validator = validate[name];
    const value = values[name];
    if (!validator) return;
    const result = validator(value);
    setErrors({
      ...errors,
      [name]: result,
    });
  };

  return {
    handleChange,
    handleBlur,
    values,
    errors,
  };
};
