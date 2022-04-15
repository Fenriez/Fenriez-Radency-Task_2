//Form global actions
export const addNewNote = () => ({ type: "ADD_NOTE" });
export const submitChanges = () => ({ type: "EDIT_NOTE" });
//Form elements local actions
export const setNoteName = (name: string) => ({
  type: "SET_NOTE_NAME",
  payload: name,
});
export const setNoteCategory = (category: string) => ({
  type: "SET_NOTE_CAT",
  payload: category,
});
export const setNoteText = (text: string) => ({
  type: "SET_NOTE_TEXT",
  payload: text,
});
