import { useState, useEffect } from 'react';
import { Errors, validateRegister } from '../utils/validateRegister';

interface FormState {
  displayName: string;
  email: string;
  password: string;
}

const initialState: FormState = {
  displayName: '',
  email: '',
  password: '',
};

// TODO - fix the type of call back
// as of now, I fixed it by saying infer from usage type
/**
 * Hook which can be reusable where-ever there is a form
 * @param callback
 * @param validate
 */
export const useForm = (
  callback: { (): void; (): void },
  validate = validateRegister,
) => {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  // use effect takes in two params
  // callback function and observer
  useEffect(() => {
    console.log('im here ', Object.keys(errors).length);
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};
