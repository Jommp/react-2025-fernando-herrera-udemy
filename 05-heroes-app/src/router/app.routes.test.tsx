import { describe, expect, test, vi } from 'vitest';
import { appRoutes } from './app.routes';
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, Outlet, RouterProvider, useParams } from 'react-router';

vi.mock('@/heroes/layouts/HeroesLayout', () => ({
  HeroesLayout: () =>
    <div data-testid="heroes-layout">
      <Outlet />
    </div>
}));

vi.mock('@/heroes/pages/home/HomePage', () => ({
  HomePage: () => <div data-testid="home-page"></div>
}));

vi.mock('@/heroes/pages/hero/HeroPage', () => ({
  HeroPage: () => {
    const { slug = '' } = useParams();
 
    return (
      <div data-testid="hero-page">
        { slug }
      </div>
    );
  }
}));

vi.mock('@/heroes/pages/search/SearchPage', () => ({
  default: () => <div data-testid="search-page"></div>
}));

describe('appRoutes', () => {
  test('should be configured as expected', () => {
    expect(appRoutes.routes).toMatchSnapshot();
  });

  test('should render home page at root path', () => {
    const router = createMemoryRouter(appRoutes.routes, {
      initialEntries: ['/']
    });

    render(<RouterProvider router={router}/>)
    expect(screen.getByTestId('home-page')).toBeDefined();
  });

  test('should render hero page at /heroes/:slug path', () => {
    const router = createMemoryRouter(appRoutes.routes, {
      initialEntries: ['/heroes/spider-man']
    });

    render(<RouterProvider router={router}/>)

    expect(screen.getByTestId('hero-page')).toBeDefined();
    expect(screen.getByTestId('hero-page').innerHTML).toContain('spider-man');
  });

  test('should render search page at /search path', async () => {
    const router = createMemoryRouter(appRoutes.routes, {
      initialEntries: ['/search']
    });

    render(<RouterProvider router={router}/>);

    expect(await screen.findByTestId('search-page')).toBeDefined();
  });

  test('should redirect to home page for unknown routes', async () => {
    const router = createMemoryRouter(appRoutes.routes, {
      initialEntries: ['/another-page']
    });

    render(<RouterProvider router={router}/>);

    expect(screen.getByTestId('home-page')).toBeDefined();
  });
});
