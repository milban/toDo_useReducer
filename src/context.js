import React, { createContext, useReducer, useContext } from "react";
import reducer, { initialState } from "./reducer";

const ToDosContext = createContext();

const ToDosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ToDosContext.Provider value={{ state, dispatch }}>
      {children}
    </ToDosContext.Provider>
  );
};

export const useDispatch = () => {
  const { dispatch } = useContext(ToDosContext);
  return dispatch;
};

export const useToDos = () => {
  const {
    state: { toDos }
  } = useContext(ToDosContext);
  return toDos;
};

export const useCompleteds = () => {
  const {
    state: { completeds }
  } = useContext(ToDosContext);
  return completeds;
};

export default ToDosProvider;
