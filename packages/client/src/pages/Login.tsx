import React from 'react';

export const Login = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="username">Username or Email</label>
      <input
        name="username"
        id="username"
        type="text"
        onChange={(e) => {
          // todo
        }}
      />

      <label htmlFor="password">Password</label>
      <input
        name="password"
        id="password"
        type="password"
        onChange={(e) => {
          // todo
        }}
      />
    </form>
  );
};
