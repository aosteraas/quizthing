import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Login, NotFound, Register, Unauthorized } from '../pages';
import { Layout } from 'antd';
import { Navigation } from './Navigation';

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
      <Layout.Footer>
        <p>Footer</p>
      </Layout.Footer>
    </>
  );
};

export default App;
