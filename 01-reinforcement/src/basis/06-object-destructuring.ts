interface Hero {
  key: string;
  name: string;
  age: number;
  rank?: string;
}

const useContext = ({ key, name, age, rank }: Hero) => {
  return {
    keyName: key,
    user: {
      name,
      age
    },
    rank
  };
};

const person: Hero = {
  key: "ABC-123",
  name: "Chema",
  age: 29
};

const { rank, keyName, user: { name } } = useContext(person);

console.log({ rank, keyName, name });
