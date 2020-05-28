import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Register = () => {
  // we use the help of useRef to test if it's the first render
  const firstRender = useRef(true);

  // set a state variable which can be used to disable the submit button
  // we set it to true so that the form is disabled on first render
  const [disable, setDisabled] = useState(true);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const [hasAgreed, setHasAgreed] = useState(false);
  const [hasAgreedError, setHasAgreedError] = useState('');

  // for every change in our state this will be fired
  // we add validation here and disable the submit button if required
  useEffect(() => {
    // we want to skip validation on first render
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    if (hasAgreed === false) {
      setHasAgreedError(
        'You need to accept terms and conditions before you proceed',
      );
      setDisabled(true);
    } else {
      setHasAgreedError('');
      setDisabled(false);
    }

    setDisabled(formValidation());
  }, [name, email, password, hasAgreed]);

  // here we run any validation, returning true/false
  const formValidation = () => {
    let isFormValid = true;

    if (name === '') {
      setNameError('Name cant be blank!');
      isFormValid = true;
    } else {
      setNameError('');
      isFormValid = false;
    }

    if (email === '') {
      setEmailError('Email cant be blank!');
      isFormValid = true;
    } else {
      setEmailError('');
      isFormValid = false;
    }

    if (password === '') {
      setPasswordError('Password cant be blank!');
      isFormValid = true;
    } else {
      setPassword('');
      isFormValid = false;
    }

    return isFormValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (hasAgreed === false) {
      setHasAgreedError(
        'You need to accept terms and conditions before you proceed',
      );
      setDisabled(true);
    } else {
      setHasAgreedError('');
      setDisabled(false);
    }
    e.preventDefault();
  };

  return (
    <div className="FormCenter">
      <form onSubmit={handleSubmit} className="FormFields">
        <div className="FormField">
          <label className="FormField__Label" htmlFor="name">
            Display Name
          </label>
          <input
            type="text"
            id="name"
            className="FormField__Input"
            placeholder="Enter your display name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <p>{nameError}</p>}
        </div>

        <div className="FormField">
          <label className="FormField__Label" htmlFor="email">
            E-Mail Address
          </label>
          <input
            type="email"
            id="email"
            className="FormField__Input"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <p>{setEmailError}</p>}
        </div>

        <div className="FormField">
          <label className="FormField__Label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="FormField__Input"
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p>{passwordError}</p>}
        </div>

        <div className="FormField">
          <label className="FormField__CheckboxLabel">
            <input
              className="FormField__Checkbox"
              type="checkbox"
              name="hasAgreed"
              checked={hasAgreed}
              onChange={(e) => setHasAgreed(e.target.checked)}
            />{' '}
            I agree all statements in{' '}
            <a href="" className="FormField__TermsLink">
              terms of service
            </a>
            {hasAgreedError && <p>{hasAgreedError}</p>}
          </label>
        </div>

        {/* Fix the active tab upon navigating to Login */}
        <div className="FormField">
          <button className="FormField__Button mr-20" disabled={disable}>
            Register
          </button>{' '}
          <Link to="/login" className="FormField__Link">
            I'm already member
          </Link>
        </div>
      </form>
    </div>
  );
};
