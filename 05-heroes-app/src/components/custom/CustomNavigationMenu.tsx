import { Link, useLocation } from 'react-router';
import { cn } from '@/lib/utils';

import {
  NavigationMenuItem,
  NavigationMenuLink
} from '@radix-ui/react-navigation-menu';
import {
  NavigationMenu,
  NavigationMenuList
} from '../ui/navigation-menu';

export const CustomNavigationMenu = () => {
  const { pathname } = useLocation();

  const isActive = (path: string) => {
    return path === pathname;
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              'rounded-md p-2',
              isActive('/') && 'bg-slate-200'
            )}
          >
            <Link to="/">Inicio</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              'rounded-md p-2',
              isActive('/search') && 'bg-slate-200'
            )}
          >
            <Link to="/search">Buscar Superheroes</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
