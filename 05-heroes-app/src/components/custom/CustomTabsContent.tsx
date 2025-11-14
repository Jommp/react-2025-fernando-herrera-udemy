import type { Hero } from '../../heroes/types/hero.interface';

import { TabsContent } from '../ui/tabs';
import { HeroesGrid } from '@/heroes/pages/hero/components/HeroesGrid';

interface Props {
  value: string;
  title: string;
  heroes: Hero[];
}

export const CustomTabsContent = ({ value, title, heroes }: Props) => {
  return (
    <TabsContent value={value} className="mt-8 sm:mt-2">
      <h2 className="text-xl font-bold text-gray-800 mb-4">{ title }</h2>

      <HeroesGrid heroes={ heroes } />
    </TabsContent>
  );
};

