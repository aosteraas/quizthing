import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Login, NotFound, Register, Unauthorized } from '../pages';
import { Layout } from 'antd';
import { Navigation } from './Navigation';
import { AppRoutes } from '../Routes';

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path={AppRoutes.Home} element={<Home />} />
        <Route path={AppRoutes.Login} element={<Login />} />
        <Route path={AppRoutes.Register} element={<Register />} />
        <Route path={AppRoutes.NotFound} element={<NotFound />} />
        <Route path={AppRoutes.Unauthorized} element={<Unauthorized />} />
      </Routes>
      <Layout.Footer>
        <p>Footer</p>
      </Layout.Footer>
    </>
  );
};

export default App;
