import React from 'react';

export const Register = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Username</label>
        <input
          name="username"
          id="username"
          type="text"
          onChange={(e) => {
            // todo
          }}
        />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          id="email"
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
    </div>
  );
};
