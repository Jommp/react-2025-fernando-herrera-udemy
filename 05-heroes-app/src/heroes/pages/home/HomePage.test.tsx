import { beforeEach, describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { FavoritesContextProvider } from '@/heroes/context/FavoritesContext';
import { useHeroesByPage } from '@/heroes/hooks/useHeroesByPage';
import { HomePage } from './HomePage';

vi.mock('@/heroes/hooks/useHeroesByPage');

const mockUseHeroesByPage = vi.mocked(useHeroesByPage);

mockUseHeroesByPage.mockReturnValue({
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: true
} as unknown as ReturnType<typeof useHeroesByPage>);

const queryClient = new QueryClient();

const renderHomePage = (initialEntries: string[] = ['/']) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <FavoritesContextProvider>
        <QueryClientProvider client={queryClient}>
          <HomePage />
        </QueryClientProvider>
      </FavoritesContextProvider>
    </MemoryRouter>
  )
};

describe('HomePage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should render HomePage with default values', () => {
    const { container } = renderHomePage();

    expect(container).toMatchSnapshot();
  });

  test('should call useHeroesByPage with default values', () => {
    renderHomePage();

    expect(mockUseHeroesByPage).toHaveBeenLastCalledWith(1, 6, 'all');
  });

  test('should call useHeroesByPage with custom query params', () => {
    renderHomePage(['/?page=2&limit=10&category=hero']);

    expect(mockUseHeroesByPage).toHaveBeenLastCalledWith(2, 10, 'hero');
  });

  test('should call useHeroesByPage with default page and same limit on tab clicked', () => {
    renderHomePage(['/?tab=favorites&page=2&limit=10']);

    const [, , , villainsTab] = screen.getAllByRole('tab');

    fireEvent.click(villainsTab);

    expect(mockUseHeroesByPage).toHaveBeenLastCalledWith(1, 10, 'villain');
  });
});
