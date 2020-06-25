import React from 'react';
import { Route } from 'react-router-dom';
import { RouteProps, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { AppRoute } from './AppRoutes';

/**
 * Checks if a user is logged in before sending them to the requested route.
 * Redirects to `/unauthorized` otherwise.
 * @param props
 */
export const SecureRoute = (props: RouteProps) => {
  const { accessToken } = useSelector((s: RootState) => s.auth);
  const navigate = useNavigate();
  if (!accessToken) {
    navigate(AppRoute.Unauthorized);
  }
  return <Route {...props} />;
};
