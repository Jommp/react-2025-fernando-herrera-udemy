import { createBrowserRouter, Navigate } from "react-router";
import { AuthPage } from '../pages/auth/AuthPage';
import { ProfilePage } from '../pages/profile/ProfilePage';
import { AboutPage } from '../pages/about/AboutPage';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AuthPage />
  },
  {
    path: '/profile',
    element: <ProfilePage />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '*',
    element: <Navigate to="/" />
  }
]);
