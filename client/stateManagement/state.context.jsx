import { createContext, useReducer, useContext } from 'react';
import reducer, { initialState } from './reducer';

// Prepares the dataLayer
export const StateContext = createContext(initialState);

export const StateProvider = ({ children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
