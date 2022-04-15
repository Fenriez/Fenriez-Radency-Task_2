export interface notesState {
  notes: noteState[];
  note: noteState;
}

export interface noteState {
  id: number;
  name: string;
  category: string;
  creationDate: Date | string;
  text: string;
  isArchived: boolean;
  internalDates: RegExpMatchArray;
}

export enum notesActionTypes {
  ADD_NOTE = "ADD_NOTE",
  SET_NOTE = "SET_NOTE",
  CLEAR_NOTE = "CLEAR_NOTE",
  ARCHIVE_NOTE = "ARCHIVE_NOTE",
  ARCHIVE_NOTES = "ARCHIVE_NOTES",
  REMOVE_NOTE = "REMOVE_NOTE",
  REMOVE_NOTES = "REMOVE_NOTES",
  EDIT_NOTE = "EDIT_NOTE",
}

export enum noteActionTypes {
  SET_NOTE_NAME = "SET_NOTE_NAME",
  SET_NOTE_CAT = "SET_NOTE_CAT",
  SET_NOTE_TEXT = "SET_NOTE_TEXT",
}

interface addNoteAction {
  type: notesActionTypes.ADD_NOTE;
  payload?: undefined;
}
interface setNoteAction {
  type: notesActionTypes.SET_NOTE;
  payload: number;
}
interface clearNoteAction {
  type: notesActionTypes.CLEAR_NOTE;
  payload?: undefined;
}
interface archiveNoteAction {
  type: notesActionTypes.ARCHIVE_NOTE;
  payload: number;
}
interface archiveAllNotesAction {
  type: notesActionTypes.ARCHIVE_NOTES;
  payload?: undefined;
}
interface removeNoteAction {
  type: notesActionTypes.REMOVE_NOTE;
  payload: number;
}
interface removeAllNotesAction {
  type: notesActionTypes.REMOVE_NOTES;
  payload?: undefined;
}
interface editNoteAction {
  type: notesActionTypes.EDIT_NOTE;
  payload?: undefined;
}

export type notesAction =
  | addNoteAction
  | setNoteAction
  | clearNoteAction
  | archiveNoteAction
  | archiveAllNotesAction
  | removeNoteAction
  | removeAllNotesAction
  | editNoteAction;

interface setNoteNameAction {
  type: noteActionTypes.SET_NOTE_NAME;
  payload: string;
}
interface setNoteCategoryAction {
  type: noteActionTypes.SET_NOTE_CAT;
  payload: string;
}
interface setNoteTextAction {
  type: noteActionTypes.SET_NOTE_TEXT;
  payload: string;
}

export type noteAction =
  | setNoteNameAction
  | setNoteCategoryAction
  | setNoteTextAction;
