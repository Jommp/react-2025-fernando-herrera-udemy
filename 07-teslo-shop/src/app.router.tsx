import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router';

import { ShopLayout } from './shop/layouts/ShopLayout';
import { HomePage } from './shop/pages/home/HomePage';
import { ProductPage } from './shop/pages/product/ProductPage';
import { GenderPage } from './shop/pages/gender/GenderPage';

const AuthLayout = lazy(() => import('./auth/layouts/AuthLayout'));
import { LoginPage } from './auth/pages/login/LoginPage';
import { RegisterPage } from './auth/pages/register/RegisterPage';

const AdminLayout = lazy(() => import('./admin/layouts/AdminLayout'));
import { DashboardPage } from './admin/pages/dashboard/DashboardPage';
import { AdminProductsPage } from './admin/pages/admin-products/AdminProductsPage';
import { AdminProductPage } from './admin/pages/admin-product/AdminProductPage';


export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <ShopLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'product/:idSlug',
        element: <ProductPage />
      },
      {
        path: 'gender/:gender',
        element: <GenderPage />
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login" />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'register',
        element: <RegisterPage />
      }
    ]
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />
      },
      {
        path: 'admin-products',
        element: <AdminProductsPage />
      },
      {
        path: 'admin-products/:idSlug',
        element: <AdminProductPage />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/" />
  }
]);
