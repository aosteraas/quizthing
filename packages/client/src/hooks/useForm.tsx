import { useState, useEffect } from 'react';
import { Errors, validate } from '../utils/validateRegister';

interface Validate {
  [key: string]: (input?: string) => undefined | string;
}

interface FormState {
  displayName: string;
  email: string;
  password: string;
  [key: string]: string;
}

const initialState: FormState = {
  displayName: '',
  email: '',
  password: '',
};

/**
 * Hook which can be reusable where-ever there is a form
 * @param callback
 * @param validate
 */
export const useForm = (onSubmit: { (): void }) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    onSubmit();
  };

  // use effect takes in two params
  // callback function and observer
  useEffect(() => {
    console.log('im here ', Object.keys(errors).length);
    if (Object.keys(errors).length === 0 && isSubmitting) {
      onSubmit();
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
  };
};
