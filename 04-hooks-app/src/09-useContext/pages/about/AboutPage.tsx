import { use } from 'react';
import { Link } from 'react-router';

import { UserContext } from '@/09-useContext/context/UserContext';

import { Button } from '@/components/ui/button';

export const AboutPage = () => {
  const { isAuthtenticated, logout } = use(UserContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">
        Página sobre mi
      </h1>

      <div className="flex gap-2 mt-4">
        {
          isAuthtenticated && (
            <Link className="hover:text-blue-500 underline" to="/profile">
              Perfil
            </Link>
          )
        }

        {
          isAuthtenticated ? (
            <Button variant="destructive" onClick={logout}>
              Salir
            </Button>
          ) : 
          (
            <Link className="hover:text-blue-500 underline" to="/login">
              Iniciar sesión
            </Link>
          )
        }
      </div>
    </div>
  );
};
