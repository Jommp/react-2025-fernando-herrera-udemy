import { createBrowserRouter, Navigate } from "react-router";
import { AuthPage } from '../pages/auth/AuthPage';
import { ProfilePage } from '../pages/profile/ProfilePage';
import { AboutPage } from '../pages/about/AboutPage';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AboutPage />
  },
  {
    path: '/profile',
    element: <ProfilePage />
  },
  {
    path: '/auth',
    element: <AuthPage />
  },
  {
    path: '*',
    element: <Navigate to="/" />
  }
]);
