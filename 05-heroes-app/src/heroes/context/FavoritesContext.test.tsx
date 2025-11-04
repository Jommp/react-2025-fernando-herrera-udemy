import { use } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';

import type { Hero } from '../types/hero.interface';
import { FavoritesContext, FavoritesContextProvider } from './FavoritesContext';

const mockHero = {
  id: 2,
  alias: 'Spiderman'
} as unknown as Hero;

const TestComponent = () => {
  const {
    favoritesCount,
    favorites,
    isFavorite,
    toggleFavorite
  } = use(FavoritesContext);

  return (
    <div>
      <div data-testid="favorites-count">{ favoritesCount }</div>

      <div data-testid="favorites-list">
        { 
          favorites.map(hero => (
            <div key={hero.id} data-testid={`hero-${hero.alias}`}>
              { hero.alias }
            </div>
          ))
        }
      </div>

      <button
        data-testid="toggle-favorite"
        onClick={() => toggleFavorite(mockHero)}
      >
        Toggle Favorite
      </button>

      <div data-testid="is-favorite">
        { isFavorite(mockHero).toString() }
      </div>
    </div>
  );
};

const renderContext = () => {
  return render(
    <FavoritesContextProvider>
      <TestComponent/>
    </FavoritesContextProvider>
  )
};

describe('FavoritesContext', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should initialize with default value', () => {
    renderContext();

    expect(screen.getByTestId('favorites-count').textContent).toBe('0');
    expect(screen.getByTestId('favorites-list').children.length).toBe(0);
  });

  test('should add hero to favorites when toggleFavorite is called with new hero', () => {
    renderContext();

    const button = screen.getByTestId('toggle-favorite');

    fireEvent.click(button);

    expect(screen.getByTestId('favorites-count').textContent).toBe('1');
    expect(screen.getByTestId('is-favorite').textContent).toBe('true');
    expect(screen.getByTestId('hero-Spiderman').textContent).toBe('Spiderman');
    expect(localStorage.getItem('favorites')).toBe('[{"id":2,"alias":"Spiderman"}]');
  });

  test('should remove hero from favorites when toggleFavorite is called with the same hero', () => {
    localStorage.setItem('favorites', JSON.stringify([mockHero]));

    renderContext();

    const button = screen.getByTestId('toggle-favorite');
    
    expect(screen.getByTestId('favorites-count').textContent).toBe('1');
    expect(screen.getByTestId('is-favorite').textContent).toBe('true');
    expect(screen.getByTestId('hero-Spiderman').textContent).toBe('Spiderman');
    expect(localStorage.getItem('favorites')).toBe('[{"id":2,"alias":"Spiderman"}]');

    fireEvent.click(button);

    expect(screen.getByTestId('favorites-count').textContent).toBe('0');
    expect(screen.getByTestId('is-favorite').textContent).toBe('false');
    expect(screen.queryByTestId('hero-Spiderman')).toBeUndefined;
  });
});
