interface Props {
  subtitle: string;
}

export const MySubtitle = ({ subtitle }: Props) => {
  console.log('Re-render subtitle');

  return (
    <>
      <h3 className='text-2xl text-white font-medium'>
        { subtitle }
      </h3>

      <button className='px-1 py-0.5 bg-indigo-500 text-white rounded-md'>
        Llamar a función
      </button>
    </>
  );
};
