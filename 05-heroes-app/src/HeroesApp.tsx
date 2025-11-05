import { RouterProvider } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { appRoutes } from './router/app.routes';
import { FavoritesContextProvider } from './heroes/context/FavoritesContext';

const queryClient = new QueryClient()

export const HeroesApp = () => {
  return (
    <>
      <QueryClientProvider client={ queryClient }>
        <FavoritesContextProvider>
          <RouterProvider router={ appRoutes } />

          <ReactQueryDevtools initialIsOpen={false} />
        </FavoritesContextProvider>
      </QueryClientProvider>
    </>
  );
};
