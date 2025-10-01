const useState = (name: string) => {
  const setFunction = (message: string) => console.log(message);

  return [
    name,
    setFunction
  ] as const;
};

const [myName, setName] = useState('Goku');
console.log(myName);       // Goku
setName('Vegeta');       // Imprime "Vegeta"
