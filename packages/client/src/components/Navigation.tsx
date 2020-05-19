import React from 'react';
import { Layout, Menu } from 'antd';

export const Navigation = () => {
  return (
    <Layout.Header>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Layout.Header>
  );
};
