import { RouterProvider } from 'react-router';
import { appRoutes } from './router/app.routes';

export const HeroesApp = () => {
  return (
    <>
      <RouterProvider router={appRoutes} />
    </>
  );
};
