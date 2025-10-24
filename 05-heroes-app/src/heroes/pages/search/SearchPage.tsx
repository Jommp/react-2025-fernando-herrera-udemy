import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '@/heroes/components/HeroStats';
import { SearchControls } from './ui/SearchControls';
import { CustomBreadcrumb } from '@/components/custom/CustomBreadcrumb';

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Búsqueda de Super Héroes"
        description="Descubre, explora y administra super héroes y villanos"
      />

      <CustomBreadcrumb currentPage="Buscar Super Héroes" />

      <HeroStats />

      <SearchControls />
    </>
  );
};
