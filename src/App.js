import React, { useReducer, useState } from "react";
import reducer, {
  initialState,
  ADD,
  DEL,
  COMPLETE,
  UNCOMPLETE
} from "./reducer";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDo, setNewToDo] = useState("");
  const onSubmit = e => {
    e.preventDefault();
    if (newToDo !== "") {
      dispatch({ type: ADD, payload: newToDo });
      setNewToDo("");
    }
  };
  const onChange = e => {
    const {
      target: { value }
    } = e;
    setNewToDo(value);
  };
  return (
    <div className="App">
      <h1>Add To do</h1>
      <form onSubmit={onSubmit}>
        <input
          value={newToDo}
          type="text"
          placeholder="Write to do"
          onChange={onChange}
        />
      </form>
      <ul>
        <h2>To Dos</h2>
        {state.toDos.map(toDo => (
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
      </ul>
      <ul>
        {state.completeds.length !== 0 && <h2>Completed</h2>}
        {state.completeds.map(completed => (
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
      </ul>
    </div>
  );
}
