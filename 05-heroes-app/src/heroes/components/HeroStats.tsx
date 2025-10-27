import { Heart, Trophy, Users, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

import { HeroStatCard } from './HeroStatCard';

import { useHeroesSummary } from '../hooks/useHeroesSummary';
import { use } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';

export const HeroStats = () => {
  const { data: summary } = useHeroesSummary();
  const { favoritesCount } = use(FavoritesContext);
  
  const favoritesPercentage = () => {
    const totalHeroes = summary?.totalHeroes ?? 0;

    return favoritesCount * 100 / totalHeroes;
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <HeroStatCard
        title="Total de personajes"
        icon={<Users className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-2xl font-bold">
          { summary?.totalHeroes }
        </div>

        <div className="flex gap-1 mt-2">
          <Badge variant="secondary" className="text-xs">
            { summary?.heroCount } Heroes
          </Badge>
          <Badge variant="destructive" className="text-xs">
            { summary?.villainCount } Villains
          </Badge>
        </div>
      </HeroStatCard>

      <HeroStatCard
        title="Favoritos"
        icon={<Heart className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-2xl font-bold text-red-600">
          { favoritesCount }
        </div>
        <p className="text-xs text-muted-foreground">
          { favoritesPercentage() }% del total
        </p>
      </HeroStatCard>

      <HeroStatCard
        title="Mas fuerte"
        icon={<Zap className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-lg font-bold">
          { summary?.strongestHero.alias }
        </div>

        <p className="text-xs text-muted-foreground">
          Fuerza: { summary?.strongestHero.strength }/10
        </p>
      </HeroStatCard>

      <HeroStatCard
        title="Mas inteligente"
        icon={<Trophy className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-lg font-bold">
          { summary?.smartestHero.alias }
        </div>

        <p className="text-xs text-muted-foreground">
          Inteligencia: { summary?.smartestHero.intelligence }/10
        </p>
      </HeroStatCard>
    </div>
  );
};
