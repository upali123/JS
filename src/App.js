import logo from './logo.svg';
import './App.css';
import PromiseComponent from './javasciptNotes/promises';
import ContextData from './javasciptNotes/useContext';
import { createContext } from 'react';
import UseRef from './javasciptNotes/useRef';
import UseReducerComp from "./javasciptNotes/useReducer"
import UseLayoutEffect from './javasciptNotes/useLayoutEffect';
import UseMemo from './javasciptNotes/useMemo';
import UseCallback from './javasciptNotes/useCallback';
export const userData = createContext()

function App() {
  
  return (
    <div className="App">
      <div>hi</div>
<userData.Provider value={[{name:"upali",designation:"developer",age:"24"}]}>
      <ContextData/></userData.Provider>
{/* 
      <UseRef/>
      <UseReducerComp/>
      <UseLayoutEffect/> */}
      <UseMemo/>
      <UseCallback/>
    </div>
  );
}

export default App;
