import React from "react";
import AddToDo from "./AddToDo";
import List from "./List";
import { useToDos, useDispatch, useCompleteds } from "./context";
import { COMPLETE, DEL, UNCOMPLETE } from "./actions";

export default function App() {
  const toDos = useToDos();
  const completeds = useCompleteds();
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Add To do</h1>
      <AddToDo />
      <List name="To Dos">
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
      </List>
      <List name={completeds.length === 0 ? "" : "Completeds"}>
        {completeds.map(completed => (
          <li key={completed.id}>
            <span>{completed.text}</span>
            <button
              onClick={() =>
                dispatch({ type: UNCOMPLETE, payload: completed.id })
              }
            >
              uncomplete
            </button>
          </li>
        ))}
      </List>
    </div>
  );
}
