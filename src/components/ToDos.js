import React from "react";
import { useToDos, useDispatch } from "../context";
import { COMPLETE, DEL } from "../actions";

export default () => {
  const toDos = useToDos();
  const dispatch = useDispatch();
  return (
    <>
      {toDos.map(toDo => (
        <li key={toDo.id}>
          <span>{toDo.text}</span>
          <button
            onClick={() => dispatch({ type: COMPLETE, payload: toDo.id })}
          >
            complete
          </button>
          <button onClick={() => dispatch({ type: DEL, payload: toDo.id })}>
            X
          </button>
        </li>
      ))}
    </>
  );
};
