import './style.css';
//import './basis/05-homework-functions';
//import './basis/06-object-destructuring';
//import './basis/07-destructuting-homework';
import { getHeroesByOwner } from './basis/08-export-import';
import { Owner } from './data/heroes.data';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hola Mundo</h1>
  </div>
`;

console.log(getHeroesByOwner(Owner.DC));
