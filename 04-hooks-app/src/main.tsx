import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

// import { HooksApp } from './HooksApp';
// import { TrafficLight } from './useState/TrafficLight';
// import { TrafficLightWithEffect } from './useEffect/TrafficLightWithEffect';
// import { TrafficLightWithHook } from './useEffect/TrafficLightWithHook';
// import { PokemonPage } from './examples/PokemonPage';
// import { FocusScreen } from './useRef/FocusScreen';
// import { TasksApp } from './useReducer/TaskApp';
// import { ScrambleWords } from './useReducer/ScrambleWords';
// import { MemoHook } from './useMemo/MemoHook';
import { MemoCounter } from './useMemo/MemoCounter';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}
    
    <MemoCounter />
  </StrictMode>,
);
