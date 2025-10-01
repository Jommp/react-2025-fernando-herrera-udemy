import { type CSSProperties } from 'react';

const firstName = 'Chema';
const lastName = 'MP';

const favoriteGames = ['The Last Of Us', 'Gears of war 3', 'Dofus'];
const isActive = false;

const address = {
  zipCode: '77516',
  country: 'Mexico',
};

const myStyles: CSSProperties = {
  backgroundColor: '#fafafa',
  borderRadius: 20,
  padding: 10,
  marginTop: 30,
};

export const MyAwesomeApp = () => {
  return (
    <>
      <h1> {firstName} </h1>
      <h3 data-testid='last-name'> {lastName} </h3>

      <p>{favoriteGames.join(', ')}</p>
      <p>{2 + 2}</p>

      <h1>{isActive ? 'Activo' : 'No activo'}</h1>

      <p style={myStyles}>{JSON.stringify(address)}</p>
    </>
  );
};
