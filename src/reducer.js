import uuid from "uuid/v4";
import { ADD, DEL, COMPLETE, UNCOMPLETE } from "./actions";
export const initialState = { toDos: [], completeds: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toDos: [...state.toDos, { text: action.payload, id: uuid() }]
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
    default:
      return;
  }
};

export default reducer;
