import { combineReducers } from "redux";
import { modalReducer } from "./modalReducer";
import { notesReducer } from "./notesReducer";

export const rootReducer = combineReducers({
  notes: notesReducer,
  modal: modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
