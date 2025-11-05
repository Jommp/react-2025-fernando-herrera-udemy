import { useSearchParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';

import { searchHeroes } from '@/heroes/actions/search-heroes.action';

import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '@/heroes/components/HeroStats';
import { CustomBreadcrumb } from '@/components/custom/CustomBreadcrumb';
import { HeroesGrid } from '../hero/components/HeroesGrid';
import { SearchControls } from './ui/SearchControls';

const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const name = searchParams.get('name') ?? undefined;
  const strength = searchParams.get('strength') ?? undefined;

  const { data: heroes } = useQuery({
    queryKey: ['heroes-search', { name, strength }],
    queryFn: () => searchHeroes({ name, strength }),
    staleTime: 1000 * 60 * 5 // 5 minutos
  });

  return (
    <>
      <CustomJumbotron
        title="Búsqueda de Super Héroes"
        description="Descubre, explora y administra super héroes y villanos"
      />

      <CustomBreadcrumb currentPage="Buscar Super Héroes" />

      <HeroStats />

      <SearchControls />

      <HeroesGrid heroes={heroes} />
    </>
  );
};

export default SearchPage;
