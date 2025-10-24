import { heroApi } from '../api/hero.api';
import type { Hero } from '../types/hero.interface';

const BASE_URL = import.meta.env.VITE_API_URL;

export const getHero = async (idSlug: string): Promise<Hero> => {
  const { data } = await heroApi.get<Hero>(`/${idSlug}`);

  const hero = {
    ...data,
    image: `${ BASE_URL }/images/${ data.image }`
  };

  return hero;
};
