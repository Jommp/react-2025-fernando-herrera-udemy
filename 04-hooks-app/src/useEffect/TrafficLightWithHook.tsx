import { useEffect, useState } from 'react';

const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse'
};

type TrafficLightColor = keyof typeof colors;

const INITIAL_COUNTDOWN = 5;

export const TrafficLightWithHook = () => {
  const [light, setLight] = useState<TrafficLightColor>('red');
  const [countdown, setCountdown] = useState(INITIAL_COUNTDOWN);

  useEffect(() => {
    if(countdown === 0) return;

    const intervalId = setInterval(() => {
      setCountdown((prev => prev - 1));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };

  }, [countdown]);

  useEffect(() => {
    if(countdown > 0) return;

    setCountdown(INITIAL_COUNTDOWN);

    if (light === 'red') {
      setLight('green');

      return;
    }

    if (light === 'yellow') {
      setLight('red');

      return;
    }

    if (light === 'green') {
      setLight('yellow');

      return;
    }
  }, [countdown, light]);
  
  
  return (
    <div className='bg-gradient'>
      <div className='flex flex-col items-center space-y-8'>
        <h1 className='text-white text-3xl font-thin'>Semáforo con UseTrafficLightHook</h1>
        <h2 className='text-white text-xl'>{ countdown }</h2>

        <div className='w-64 bg-gray-700 rounded-full h-2'>
          <div className='bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear'
            style={{ width: `${countdown/INITIAL_COUNTDOWN * 100}%` }}
          ></div>
        </div>

        <div className={`w-32 h-32 rounded-full ${light === 'red' ? colors[light] : 'bg-gray-500'}`}></div>
        <div className={`w-32 h-32 rounded-full ${light === 'yellow' ? colors[light] : 'bg-gray-500'}`}></div>
        <div className={`w-32 h-32 rounded-full ${light === 'green' ? colors[light] : 'bg-gray-500'}`}></div>
      </div>
    </div>
  );
};
