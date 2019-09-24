import React from "react";
import { useCompleteds, useDispatch } from "../context";
import { UNCOMPLETE } from "../actions";

export default () => {
  const completeds = useCompleteds();
  const dispatch = useDispatch();
  return (
    <>
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
    </>
  );
};
