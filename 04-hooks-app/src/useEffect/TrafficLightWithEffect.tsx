import { useEffect, useState } from 'react';

const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse'
};

type TrafficLightColor = keyof typeof colors;

export const TrafficLightWithEffect = () => {
  const [light, setLight] = useState<TrafficLightColor>('red');
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if(countdown < 0) return;

    const intervalId = setInterval(() => {
      setCountdown((prev => prev - 1));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };

  }, [countdown]);
  
  return (
    <div className='bg-gradient'>
      <div className='flex flex-col items-center space-y-8'>
        <h1 className='text-white text-3xl font-thin'>Semáforo con UseEffect</h1>
        <h2 className='text-white text-xl'>10</h2>

        <div className={`w-32 h-32 rounded-full ${light === 'red' ? colors[light] : 'bg-gray-500'}`}></div>
        <div className={`w-32 h-32 rounded-full ${light === 'yellow' ? colors[light] : 'bg-gray-500'}`}></div>
        <div className={`w-32 h-32 rounded-full ${light === 'green' ? colors[light] : 'bg-gray-500'}`}></div>
      </div>
    </div>
  );
};
