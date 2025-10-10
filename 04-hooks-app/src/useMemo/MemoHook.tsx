import { useCallback, useState } from 'react';

import { MyTitle } from './ui/MyTitle';
import { MySubtitle } from './ui/MySubtitle';


export const MemoHook = () => {
  const [title, setTitle] = useState('Hola');
  const [subtitle, setSubtitle] = useState('Mundo');

  const handleAPICall = useCallback((subtitle: string) => {
    console.log('Callin API...', subtitle)
  }, []);

  return (
    <div className='bg-gradient flex flex-col gap-4'>
      <h1 className='text-4xl font-bold text-white'>
        MemoApp
      </h1>

      <MyTitle title={title} />

      <MySubtitle subtitle={subtitle} apiCall={handleAPICall}/>

      <button
        className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
        onClick={() => setTitle('Hello ' + new Date().getTime())}
      >
        Cambiar titulo
      </button>

      <button
        className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
        onClick={() => setSubtitle('World')}
      >
        Cambiar subtitulo
      </button>
    </div>
  );
};
