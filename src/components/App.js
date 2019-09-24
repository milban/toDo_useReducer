import React from "react";
import AddToDo from "./AddToDo";
import List from "./List";
import { useCompleteds } from "../context";
import ToDos from "./ToDos";
import CompletedDos from "./CompletedDos";

export default function App() {
  const completeds = useCompleteds();
  return (
    <div className="App">
      <AddToDo name="Add To do" />
      <List name="To Dos">
        <ToDos />
      </List>
      <List name={completeds.length === 0 ? "" : "Completeds"}>
        <CompletedDos />
      </List>
    </div>
  );
}
