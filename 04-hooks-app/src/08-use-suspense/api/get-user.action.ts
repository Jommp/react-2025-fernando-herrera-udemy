export interface User {
  id: number;
  name: string;
  location: string;
  job: string;
}

export const getUserAction = async (id: number) => {
  await new Promise(res => setTimeout(res, 2000));

  return {
    id,
    name: 'Chema',
    location: 'Cancún, México',
    job: 'React Engineer'
  }; 
};
