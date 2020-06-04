import React from 'react';
import { Home, Login, Register, NotFound, Unauthorized } from '../pages';

export enum AppRoute {
  Home = '/',
  Login = 'login',
  Register = 'register',
  NotFound = 'not-found',
  Unauthorized = 'unauthorized',
}

export interface AppNavigationData {
  path: AppRoute;
  copy: string;
}

export interface AppRouteData {
  path: AppRoute;
  Component: React.ComponentType;
}

export const AppRouteData: AppRouteData[] = [
  { path: AppRoute.Home, Component: Home },
  { path: AppRoute.Login, Component: Login },
  { path: AppRoute.Register, Component: Register },
  { path: AppRoute.NotFound, Component: NotFound },
  { path: AppRoute.Unauthorized, Component: Unauthorized },
];

export const AppNavigation: AppNavigationData[] = [
  { path: AppRoute.Home, copy: 'Home' },
  { path: AppRoute.Login, copy: 'Login' },
  { path: AppRoute.Register, copy: 'Register' },
];
