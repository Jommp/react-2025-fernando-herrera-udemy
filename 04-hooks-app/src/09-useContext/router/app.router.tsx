import { createBrowserRouter, Navigate } from "react-router";
import { LoginPage } from '../pages/auth/LoginPage';
import { ProfilePage } from '../pages/profile/ProfilePage';
import { AboutPage } from '../pages/about/AboutPage';
import { PrivateRoute } from './PrivateRoute';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AboutPage />
  },
  {
    path: '/profile',
    element: <PrivateRoute element={ <ProfilePage /> }/>
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '*',
    element: <Navigate to="/" />
  }
]);
