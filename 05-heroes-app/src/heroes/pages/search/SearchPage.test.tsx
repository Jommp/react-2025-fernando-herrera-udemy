import { beforeEach, describe, expect, test, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import SearchPage from './SearchPage';
import { searchHeroesAction } from '@/heroes/actions/search-heroes.action';
import type { Hero } from '@/heroes/types/hero.interface';

vi.mock('@/heroes/actions/search-heroes.action');
const mockSearchHeroesAction = vi.mocked(searchHeroesAction);

vi.mock('@/components/custom/CustomJumbotron', () => ({
  CustomJumbotron: () => <div data-testid="custom-jumbotron"></div>
}));

vi.mock('@/heroes/pages/hero/components/HeroesGrid', () => ({
  HeroesGrid: ({ heroes }: { heroes: Hero[] }) => (
    <div data-testid="hero-grid">
      {
        heroes &&
        heroes.map(hero => (
          <div key={hero.id}>
            { hero.alias }
          </div>
        ))
      }
    </div>
  )
}));

const queryClient = new QueryClient();

const renderSearchPage = (initialEntries: string[] = ['/']) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <QueryClientProvider client={queryClient}>
        <SearchPage />
      </QueryClientProvider>
    </MemoryRouter>
  )
};

describe('SearchPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  })

  test('should render SearchPage with default values', () => {
    const { container } = renderSearchPage();

    expect(mockSearchHeroesAction).toHaveBeenCalledWith({
      name: undefined,
      strength: undefined
    });

    expect(container).toMatchSnapshot();
  });

  test('should call search action with name parameter', () => {
    renderSearchPage(['/search?name=spider-man']);

    expect(mockSearchHeroesAction).toHaveBeenCalledWith({
      name: 'spider-man',
      strength: undefined
    });
  });

  test('should call search action with strength parameter', () => {
    renderSearchPage(['/search?strength=6']);

    expect(mockSearchHeroesAction).toHaveBeenCalledWith({
      name: undefined,
      strength: '6'
    });
  });

  test('should call search action with name and strength parameters', () => {
    renderSearchPage(['/search?name=spider-man&strength=8']);

    expect(mockSearchHeroesAction).toHaveBeenCalledWith({
      name: 'spider-man',
      strength: '8'
    });
  });

  test('should render HeroGrid with search results', async () => {
    const mockHeroes = [
      { id: '1', alias: 'Spiderman' } as unknown as Hero,
      { id: '2', alias: 'Ironman' } as unknown as Hero
    ];

    mockSearchHeroesAction.mockResolvedValue(mockHeroes);

    renderSearchPage();

    await waitFor(() => {
      expect(screen.getByText('Spiderman')).toBeDefined();
      expect(screen.getByText('Ironman')).toBeDefined();
    });
  });
});
