import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Login, NotFound, Register, Unauthorized } from '../pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
