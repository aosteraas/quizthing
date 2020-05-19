import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { Navigation } from './Navigation';
import { AppRouteData } from '../Routes';

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        {AppRouteData.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
      <Layout.Footer>
        <p>Footer</p>
      </Layout.Footer>
    </>
  );
};

export default App;
