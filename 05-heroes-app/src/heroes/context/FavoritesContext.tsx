import { createContext, useEffect, useState, type PropsWithChildren } from 'react';
import type { Hero } from '../types/hero.interface';

interface FavoritesContext {
  // State
  favorites: Hero[];
  favoritesCount: number;

  // Methods
  isFavorite: (hero: Hero) => boolean;
  toogleFavorite: (hero: Hero) => void;
}

export const FavoritesContext = createContext({} as FavoritesContext);

const getFavoritesFromLocalStorage = (): Hero[] => {
  const favorites = localStorage.getItem('favorites');

  return favorites ? JSON.parse(favorites) :  [];
};

export const FavoritesContextProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Hero[]>(getFavoritesFromLocalStorage);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites])
  

  const isFavorite = (hero: Hero) => {
    return favorites.some((h) => h.id === hero.id);
  };
  
  const toggleFavorite = (hero: Hero) => {
    const heroExists = favorites.find((h) => h.id === hero.id);

    if (!heroExists) {
      setFavorites([...favorites, hero]);

      return;
    }

    const newFavorites = favorites.filter((h) => h.id !== hero.id);

    setFavorites(newFavorites);
  };

  return (
    <FavoritesContext
      value={{
        // State
        favorites: favorites,
        favoritesCount: favorites.length,
        // Methods
        isFavorite: isFavorite,
        toogleFavorite: toggleFavorite
      }}
    >
      { children }
    </FavoritesContext>
  )
}

