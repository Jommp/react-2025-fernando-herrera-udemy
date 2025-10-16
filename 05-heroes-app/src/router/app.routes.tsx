import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';

import { HeroesLayout } from '@/heroes/layouts/HeroesLayout';
import { HomePage } from '../heroes/pages/home/HomePage';
import { HeroPage } from '@/heroes/pages/hero/HeroPage';
import { SearchPage } from '@/heroes/pages/search/SearchPage';

import { AdminLayout } from '@/admin/layouts/AdminLayout';
// import { AdminPage } from '@/admin/pages/AdminPage';
const AdminPage = lazy(() => import('@/admin/pages/AdminPage'));

export const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <HeroesLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'heroes/1',
        element: <HeroPage />
      },
      {
        path: 'search',
        element: <SearchPage />
      },
    ]
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminPage />
      }
    ]
  }
]);
