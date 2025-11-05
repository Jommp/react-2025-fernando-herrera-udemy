import { use, useMemo } from 'react';
import { useSearchParams } from 'react-router';

import {
  Heart,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroesGrid } from '../hero/components/HeroesGrid';
import { HeroStats } from '@/heroes/components/HeroStats';
import { CustomPagination } from '@/components/custom/CustomPagination';
import { CustomBreadcrumb } from '@/components/custom/CustomBreadcrumb';

import { useHeroesSummary } from '@/heroes/hooks/useHeroesSummary';
import { useHeroesByPage } from '@/heroes/hooks/useHeroesByPage';
import { FavoritesContext } from '@/heroes/context/FavoritesContext';

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { favoritesCount, favorites } = use(FavoritesContext);

  const activeTab = searchParams.get('tab') || 'all';
  const page = searchParams.get('page') || 1;
  const limit = searchParams.get('limit') || 6;
  const category = searchParams.get('category') || 'all';

  const selectedTab = useMemo(() => {
    const validTabs = ['all', 'favorites', 'heroes', 'villains'];

    return validTabs.includes(activeTab) ? activeTab : 'all';
  }, [activeTab]);

  const handleTabClick = (tab: string, category: string) => {
    setSearchParams(prev => {
      prev.set('tab', tab);
      prev.set('category', category);
      prev.set('page', '1');

      return prev;
    });
  };

  const { data: heroesResponse } = useHeroesByPage(+page, +limit, category);
  const { data: summary } = useHeroesSummary();
  
  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron
          title="Universo de Super Héroes"
          description="Descubre, explora y administra super héroes y villanos"
        />

        <CustomBreadcrumb currentPage="Super Héroes" />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value={selectedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              value="all"
              onClick={() => handleTabClick('all', 'all')}
            >
              Todos los personajes ({ summary?.totalHeroes })
            </TabsTrigger>

            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() => handleTabClick('favorites', 'all')}
            >
              <Heart className="h-4 w-4" />
              Favorites ({favoritesCount})
            </TabsTrigger>

            <TabsTrigger
              value="heroes"
              onClick={() => handleTabClick('heroes', 'hero')}
            >
              Heroes ({ summary?.heroCount })
            </TabsTrigger>

            <TabsTrigger
              value="villains"
              onClick={() => handleTabClick('villains', 'villain')}
            >
              Villanos ({ summary?.villainCount })
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <h2>Todos</h2>

            <HeroesGrid heroes={heroesResponse?.heroes} />
          </TabsContent>

          <TabsContent value="favorites">
            <h2>Favoritos</h2>

            <HeroesGrid heroes={favorites} />
          </TabsContent>

          <TabsContent value="heroes">
            <h2>Héroes</h2>

            <HeroesGrid heroes={heroesResponse?.heroes} />
          </TabsContent>

          <TabsContent value="villains">
            <h2>Villanos</h2>

            <HeroesGrid heroes={heroesResponse?.heroes} />
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        {
          selectedTab !== 'favorites' && (
            <CustomPagination totalPages={ heroesResponse?.pages || 0 } />
          )
        }
      </>
    </>
  );
};
