import { useState } from 'react';
import { Errors, validate } from '../utils/validateRegister';

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

const initialErrorState: Errors = {
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
  const [errors, setErrors] = useState(initialErrorState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
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

  const formUnused = Object.values(values).every((x) => x.length === 0);
  const submitDisabled = Object.values(errors).some((x) => x.length > 0);
  const disabled = formUnused || submitDisabled;

  return {
    onChange,
    onBlur,
    values,
    errors,
    disabled,
  };
};
