import { combineReducers } from "redux";
import { modalReducer } from "./ModalReducer";
import { notesReducer } from "./NotesReducer";

export const rootReducer = combineReducers({
  notes: notesReducer,
  modal: modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
