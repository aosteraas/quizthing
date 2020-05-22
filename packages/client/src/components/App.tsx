import React from 'react';
import styled from 'styled-components/macro';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { Navigation } from './Navigation';
import { AppRouteData } from '../Routes';

const Main = styled(Layout.Content)`
  height: 100%;
  background: white;
`;

const App = () => {
  return (
    <>
      <Navigation />
      <Main style={{ height: `100%`, background: 'white' }}>
        <Routes>
          {AppRouteData.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Main>
      <Layout.Footer>
        <p>Footer</p>
      </Layout.Footer>
    </>
  );
};

export default App;
