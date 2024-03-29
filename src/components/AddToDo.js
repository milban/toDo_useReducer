import React, { useState } from "react";
import { ADD } from "../actions";
import { useDispatch } from "../context";

export default ({ name }) => {
  const [newToDo, setNewToDo] = useState("");
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    if (newToDo !== "") {
      dispatch({ type: ADD, payload: newToDo, editing: false });
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
    <>
      <h1>{name}</h1>
      <form onSubmit={onSubmit}>
        <input
          value={newToDo}
          type="text"
          placeholder="Write to do"
          onChange={onChange}
        />
      </form>
    </>
  );
};
