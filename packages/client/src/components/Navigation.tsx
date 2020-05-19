import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { AppNavigation } from '../Routes';

export const Navigation = () => {
  const location = useLocation();

  return (
    <Layout.Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[location.pathname]}
      >
        {AppNavigation.map(({ path, copy }) => (
          <Menu.Item key={path}>
            <Link to={path}>{copy}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Layout.Header>
  );
};
