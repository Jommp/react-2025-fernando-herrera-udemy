import { Link } from 'react-router';

export const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">
        Página sobre mi
      </h1>

      <div className="flex gap-2 mt-4">
        <Link className="hover:text-blue-500 underline" to="/profile">
          Perfil
        </Link>

        <Link className="hover:text-blue-500 underline" to="/login">
          Iniciar sesión
        </Link>
      </div>
    </div>
  );
};
