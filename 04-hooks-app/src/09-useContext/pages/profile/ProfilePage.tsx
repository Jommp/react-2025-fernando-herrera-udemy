import { use } from 'react';
import { UserContext } from '@/09-useContext/context/UserContext';

import { Button } from '@/components/ui/button';

export const ProfilePage = () => {
  const { user } = use(UserContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl">Perfil de usuario</h1>
      <hr />

      <pre className="my-4">
        {JSON.stringify({user}, null, 2)}
      </pre>
      
      <Button variant="destructive">
        Salir
      </Button>
    </div>
  );
};
