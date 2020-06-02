import React from 'react';
import '../styles/RegistrationStyle.css';
import useForm from '../utils/useForm';
import validate from '../utils/validateRegister';
import strings from '../locale/en';

export const Register = () => {
  const { handleInputChange, handleSubmit, values, errors } = useForm(
    submit,
    validate,
  );

  function submit() {
    console.log('Registered successfully');
  }

  return (
    <div className="FormCenter">
      <form onSubmit={handleSubmit} className="FormFields" noValidate>
        <div className="FormField">
          <label className="FormField__Label" htmlFor="name">
            {strings.displayNameLabel}
          </label>
          <input
            type="text"
            id="displayName"
            className="FormField__Input"
            placeholder={strings.displayNamePlaceHolder}
            name="displayName"
            value={values.displayName}
            onChange={handleInputChange}
          />
        </div>

        <div className="FormField">
          <label className="FormField__Label" htmlFor="email">
            {strings.emailLabel}
          </label>
          <input
            type="email"
            id="email"
            className="FormField__Input"
            placeholder={strings.emailPlaceHolder}
            name="email"
            value={values.email}
            onChange={handleInputChange}
            required
          />
          {errors.email && <p className="is-danger">{errors.email}</p>}
        </div>

        <div className="FormField">
          <label className="FormField__Label" htmlFor="password">
            {strings.passwordLabel}
          </label>
          <input
            type="password"
            id="password"
            className="FormField__Input"
            placeholder={strings.passwordPlaceHolder}
            name="password"
            value={values.password}
            onChange={handleInputChange}
          />
          {errors.password && <p className="is-danger">{errors.password}</p>}
        </div>
        <button className="FormField__Button" type="submit">
          {strings.registerBtnLabel}
        </button>
      </form>
    </div>
  );
};
