import { Link, Outlet } from 'react-router';

export const HeroesLayout = () => {
  return (
    <div className="bg-red-500">
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>

        <li>
          <Link to="/heroes/1">
            Heroe
          </Link>
        </li>

        <li>
          <Link to="/search">
            Buscar
          </Link>
        </li>

        <li>
          <Link to="/admin">
            Admin
          </Link>
        </li>
      </ul>

      <section className="mt-4">
        <Outlet />
      </section>
    </div>
  );
};
