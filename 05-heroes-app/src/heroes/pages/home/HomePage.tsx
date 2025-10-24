import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router';

import {
  Heart,
} from "lucide-react";

import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroesGrid } from '../hero/components/HeroesGrid';
import { HeroStats } from '@/heroes/components/HeroStats';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CustomPagination } from '@/components/custom/CustomPagination';
import { CustomBreadcrumb } from '@/components/custom/CustomBreadcrumb';
import { getHeroesByPage } from '@/heroes/actions/get-heroes-by-page.action';

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const activeTab = searchParams.get('tab') || 'all';

  const selectedTab = useMemo(() => {
    const validTabs = ['all', 'favorites', 'heroes', 'villains'];

    return validTabs.includes(activeTab) ? activeTab : 'all';
  }, [activeTab]);

  const handleTabClick = (tab: string) => {
    setSearchParams(prev => {
      prev.set('tab', tab);
                  
      return prev;
    });
  };
  // useEffect(() => {
  //   getHeroesByPage();
  
  // }, [])

  const { data: heroesResponse } = useQuery({
    queryKey: ['heroes'],
    queryFn: () => getHeroesByPage(),
    staleTime: 1000 * 60 * 5 // 5 minutos
  });
  
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
              onClick={() => handleTabClick('all')}
            >
              All Characters (16)
            </TabsTrigger>

            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() => handleTabClick('favorites')}
            >
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>

            <TabsTrigger
              value="heroes"
              onClick={() => handleTabClick('heroes')}
            >
              Heroes (12)
            </TabsTrigger>

            <TabsTrigger
              value="villains"
              onClick={() => handleTabClick('villains')}
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <h2>Todos</h2>

            <HeroesGrid heroes={heroesResponse?.heroes} />
          </TabsContent>

          <TabsContent value="favorites">
            <h2>Favoritos</h2>

            <HeroesGrid />
          </TabsContent>

          <TabsContent value="heroes">
            <h2>Héroes</h2>

            <HeroesGrid />
          </TabsContent>

          <TabsContent value="villains">
            <h2>Villanos</h2>

            <HeroesGrid />
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <CustomPagination totalPages={4} />
      </>
    </>
  );
};
