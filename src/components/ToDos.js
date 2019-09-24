
import React, { useState } from "react";
import { useToDos, useDispatch, useEditingNow } from "../context";
import { COMPLETE, DEL, EDIT_START, EDIT_CONFIRM } from "../actions";
import React from "react";
import { useToDos, useDispatch } from "../context";
import { COMPLETE, DEL } from "../actions";

export default () => {
  const toDos = useToDos();
  const dispatch = useDispatch();
  const editingNow = useEditingNow();
  const [newTodo, setNewTodo] = useState("");
  const onSubmit = e => {
    e.preventDefault();
    const { id, value: text } = e.target.querySelector("input");
    dispatch({ type: EDIT_CONFIRM, text, payload: id, editingNow: false });
    setNewTodo("");
  };
  const onChange = e => {
    const {
      target: { value }
    } = e;
    setNewTodo(value);
  };
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
          {editingNow ? (
            ""
          ) : (
            <button
              onClick={() =>
                dispatch({
                  type: EDIT_START,
                  payload: toDo.id,
                  editing: !toDo.editing
                })
              }
            >
              edit
            </button>
          )}
          {toDo.editing ? (
            <form onSubmit={onSubmit}>
              <input
                value={newTodo}
                placeholder="Edit to do"
                onChange={onChange}
                id={toDo.id}
              />
            </form>
          ) : (
            ""
          )}
        </li>
      ))}
    </>
  );
};
