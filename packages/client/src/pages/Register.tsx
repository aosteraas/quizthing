import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/RegistrationStyle.css';

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

  // for every change in our state this will be fired
  // we add validation here and disable the submit button if required
  useEffect(() => {
    // we want to skip validation on first render
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    setDisabled(formValidation());
  }, [name, email, password]);

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
      setPasswordError('');
      isFormValid = false;
    }

    return isFormValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // dispatch an action
    e.preventDefault();
  };

  const validateEmail = (email: string) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleInputChange = () => {};

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
          {nameError && <p className="is-danger">{nameError}</p>}
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
          {emailError && <p className="is-danger">{setEmailError}</p>}
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
          {passwordError && <p className="is-danger">{passwordError}</p>}
        </div>

        {/* Fix the active tab upon navigating to Login */}
        <div className="FormField">
          <button className="FormField__Button" disabled={disable}>
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
