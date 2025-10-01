// function getUser() {
//   return {
//     uid: 'ABC-123',
//     username: 'ElChema'
//   }
// };

interface User {
  uid: string;
  username: string;
}

const getUser = (): User => ({
  uid: 'XYZ-789',
  username: 'LosPaulos'
});
  
const user = getUser();

console.log({ user });


