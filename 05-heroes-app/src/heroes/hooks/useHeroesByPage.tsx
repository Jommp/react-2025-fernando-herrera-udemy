import { useQuery } from '@tanstack/react-query';

import { getHeroesByPage } from '../actions/get-heroes-by-page.action';

export const useHeroesByPage = (page: number, limit: number) => {
  return useQuery({
    queryKey: ['heroes', { page, limit }],
    queryFn: () => getHeroesByPage(page, limit),
    staleTime: 1000 * 60 * 5 // 5 minutos
  });
};
