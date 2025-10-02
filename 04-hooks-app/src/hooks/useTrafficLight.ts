import { useEffect, useState } from 'react';

const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse'
};

type TrafficLightColor = keyof typeof colors;

const INITIAL_COUNTDOWN = 5;

export const useTrafficLight = (initialColor: TrafficLightColor = 'red') => {
  const [light, setLight] = useState<TrafficLightColor>(initialColor);
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
  
  return {
    // Properties
    countdown,

    // Computed
    percentageWidth: countdown/INITIAL_COUNTDOWN * 100,
    redLightClass: light === 'red' ? colors.red : 'bg-gray-500',
    yellowLightClass: light === 'yellow' ? colors.yellow : 'bg-gray-500',
    greenLightClass: light === 'green' ? colors.green : 'bg-gray-500',
  };
};
