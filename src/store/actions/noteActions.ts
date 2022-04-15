//Note local actions
export const archiveNote = (id: number) => ({
  type: "ARCHIVE_NOTE",
  payload: id,
});
export const editNote = (id: number) => ({ type: "SET_NOTE", payload: id });
export const removeNote = (id: number) => ({
  type: "REMOVE_NOTE",
  payload: id,
});
// Technical action
export const clearNote = () => ({ type: "CLEAR_NOTE" });
//App global actions
export const archiveAllNotes = () => ({ type: "ARCHIVE_NOTES" });
export const removeAllNotes = () => ({ type: "REMOVE_NOTES" });
