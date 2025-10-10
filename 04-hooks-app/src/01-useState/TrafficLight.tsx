import { useState } from 'react';

const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse'
};

type TrafficLightColor = keyof typeof colors;

export const TrafficLight = () => {
  const [light, setLight] = useState<TrafficLightColor>('red');

  const handleColorChange = (color: TrafficLightColor) => {
    setLight((previous) => {
      console.log({ previous });

      return color;
    });
  };

  return (
    <div className='bg-gradient'>
      <div className='flex flex-col items-center space-y-8'>
        <div className={`w-32 h-32 rounded-full ${light === 'red' ? colors[light] : 'bg-gray-500'}`}></div>
        <div className={`w-32 h-32 rounded-full ${light === 'yellow' ? colors[light] : 'bg-gray-500'}`}></div>
        <div className={`w-32 h-32 rounded-full ${light === 'green' ? colors[light] : 'bg-gray-500'}`}></div>

        {
          <div className='flex gap-2'>
            <button
              className='bg-red-500 text-white px-4 py-2 rounded-md'
              onClick={() => handleColorChange('red')}
            >
              Rojo
            </button>

            <button
              className='bg-yellow-500 text-white px-4 py-2 rounded-md'
              onClick={() => handleColorChange('yellow')}
            >
              Amarillo
            </button>

            <button
              className='bg-green-500 text-white px-4 py-2 rounded-md'
              onClick={() => handleColorChange('green')}
            >
              Verde
            </button>
          </div>
        }
      </div>
    </div>
  );
};
