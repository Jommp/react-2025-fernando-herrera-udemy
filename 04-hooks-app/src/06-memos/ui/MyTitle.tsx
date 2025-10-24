import React from 'react';

interface Props {
  title: string;
}

export const MyTitle = React.memo(({ title }: Props) => {
  console.log('Re-render title');

  return (
    <h1 className='text-3xl text-white font-bold'>
      {title}
    </h1>
  );
});
