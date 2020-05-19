import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { AppRoutes } from '../Routes';

const nav = [
  { path: AppRoutes.Home, copy: 'Home' },
  { path: AppRoutes.Login, copy: 'Login' },
  { path: AppRoutes.Register, copy: 'Register' },
];

export const Navigation = () => {
  const location = useLocation();

  return (
    <Layout.Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[location.pathname]}
      >
        {nav.map(({ path, copy }, idx) => (
          <Menu.Item key={path}>
            <Link to={path}>{copy}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Layout.Header>
  );
};
