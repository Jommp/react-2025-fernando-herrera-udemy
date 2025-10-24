export interface User {
  id: number;
  name: string;
  location: string;
  job: string;
}

export const getUserAction = async (id: number) => {
  console.log('Función llamada');

  await new Promise(res => setTimeout(res, 2000));

  console.log('Función terminada');

  return {
    id,
    name: 'Chema',
    location: 'Cancún, México',
    job: 'React Engineer'
  }; 
};
