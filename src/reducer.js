import uuid from "uuid/v4";
import {
  ADD,
  DEL,
  COMPLETE,
  UNCOMPLETE,
  EDIT_START,
  EDIT_CONFIRM
} from "./actions";
export const initialState = { toDos: [], completeds: [], editingNow: false };

const reducer = (state, action) => {
  const editTarget = state.toDos.find(toDo => toDo.id === action.payload);
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toDos: [
          ...state.toDos,
          { text: action.payload, id: uuid(), editing: action.editing }
        ]
      };
    case DEL:
      return {
        ...state,
        toDos: state.toDos.filter(toDo => toDo.id !== action.payload)
      };
    case COMPLETE:
      return {
        ...state,
        toDos: state.toDos.filter(toDo => toDo.id !== action.payload),
        completeds: [
          ...state.completeds,
          state.toDos.find(toDo => toDo.id === action.payload)
        ]
      };
    case UNCOMPLETE:
      return {
        ...state,
        toDos: [
          ...state.toDos,
          state.completeds.find(completed => completed.id === action.payload)
        ],
        completeds: state.completeds.filter(
          completed => completed.id !== action.payload
        )
      };
    case EDIT_START:
      return {
        ...state,
        toDos: [
          ...state.toDos.filter(toDo => toDo.id !== action.payload),
          { ...editTarget, editing: action.editing }
        ],
        editingNow: !state.editingNow
      };
    case EDIT_CONFIRM:
      return {
        ...state,
        toDos: [
          ...state.toDos.filter(toDo => toDo.id !== action.payload),
          { ...editTarget, text: action.text, editing: action.editingNow }
        ],
        editingNow: action.editingNow
      };
    default:
      return;
  }
};

export default reducer;
