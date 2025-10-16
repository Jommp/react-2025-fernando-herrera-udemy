import { useState } from 'react';

import {
  Heart,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroesGrid } from '../hero/components/HeroesGrid';
import { HeroStats } from '@/heroes/components/HeroStats';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

type Tabs = 'all' | 'favorites' | 'heroes' | 'villains';

export const HomePage = () => {
  const [currentTab, setCurrentTab] = useState<Tabs>('all');

  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron
          title="Universo de Super Héroes"
          description="Descubre, explora y administra super héroes y villanos"
        />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value={currentTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              value="all"
              onClick={() => setCurrentTab('all')}
            >
              All Characters (16)
            </TabsTrigger>

            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() => setCurrentTab('favorites')}
            >
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>

            <TabsTrigger
              value="heroes"
              onClick={() => setCurrentTab('heroes')}
            >
              Heroes (12)
            </TabsTrigger>

            <TabsTrigger
              value="villains"
              onClick={() => setCurrentTab('villains')}
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <h2>Todos</h2>

            <HeroesGrid />
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
        <div className="flex items-center justify-center space-x-2">
          <Button variant="outline" size="sm" disabled>
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          <Button variant="default" size="sm">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="ghost" size="sm" disabled>
            <MoreHorizontal className="h-4 w-4" />
          </Button>

          <Button variant="outline" size="sm">
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </>
    </>
  );
};
