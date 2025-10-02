import { useTrafficLight } from '../hooks/useTrafficLight';

export const TrafficLightWithHook = () => {
  const {
    countdown,
    light,
    colors,
    INITIAL_COUNTDOWN
  } = useTrafficLight();
  
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
