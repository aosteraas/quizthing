import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './Navigation';
import { AppRouteData, SecureRoutes, SecureRoute } from '../Routes';

const App = () => {
  return (
    <>
      <Navigation />
      <main style={{ height: `100%`, background: 'white' }}>
        <Routes>
          {AppRouteData.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          {SecureRoutes.map(({ path, Component }) => (
            <SecureRoute key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
};

export default App;
