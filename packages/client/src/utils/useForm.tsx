// custom react hook which can be reusable where-ever there is a form

import { useState, useEffect } from 'react';
import { Errors } from './validateRegister';

// TODO - fix the type of call back
// as of now, I fixed it by saying infer from usage type
const useForm = (callback: { (): void; (): void }, validate: any) => {
  const [values, setValues] = useState({
    displayName: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // TODO - fix the event type
  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
    handleInputChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
