import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// import { HooksApp } from './HooksApp';
// import { TrafficLight } from './useState/TrafficLight';
// import { TrafficLightWithEffect } from './useEffect/TrafficLightWithEffect';
// import { TrafficLightWithHook } from './useEffect/TrafficLightWithHook';
// import { PokemonPage } from './examples/PokemonPage';
// import { FocusScreen } from './useRef/FocusScreen';
// import { TasksApp } from './useReducer/TaskApp';
import { ScrambleWords } from './useReducer/ScrambleWords';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    
    <ScrambleWords />
  </StrictMode>,
);
