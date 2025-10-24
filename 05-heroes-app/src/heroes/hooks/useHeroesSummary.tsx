import { useQuery } from '@tanstack/react-query';
import { getHeroesSummary } from '../actions/get-heroes-summary.action';

export const useHeroesSummary = () => {
  return useQuery({
    queryKey: ['heroes-summary'],
    queryFn: getHeroesSummary,
    staleTime: 1000 * 60 * 5 // 5 minutos
  });
};

