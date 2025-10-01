import { type Hero, Owner, heroes } from "../data/heroes.data";

/**
 * getHeroesByOwner => Hero[]
 * Filtra héroes por su propietario
 * @param Owner - El propietario por el cual filtrar (DC o Marvel)
 * @return Array de héroes pertenecientes al propietario
 */

export const getHeroesByOwner = (owner: Owner): Hero[] => {
  const heroesByOwner = heroes.filter(hero => hero.owner === owner);

  return heroesByOwner; 
};
