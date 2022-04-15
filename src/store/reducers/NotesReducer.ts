import { notesDB } from "../testDB";
import {
  noteAction,
  noteActionTypes,
  notesAction,
  notesActionTypes,
  notesState,
  noteState
} from "../types/notesReducerTypes";

const initialState: notesState = {
  notes: notesDB,
  note: {
    id: 0,
    name: "",
    category: "",
    creationDate: "",
    text: "",
    isArchived: false,
    internalDates: [],
  },
};

export const notesReducer = (
  state = initialState,
  { type, payload }: notesAction | noteAction
): notesState => {
  switch (type) {
    case notesActionTypes.ADD_NOTE:
      return {
        notes: [...state.notes, createNote(state.note)],
        note: initialState.note,
      };
    case notesActionTypes.SET_NOTE:
      return {
        ...state,
        note: findNote(state.notes, payload) ?? initialState.note,
      };
    case noteActionTypes.SET_NOTE_NAME:
      return {
        ...state,
        note: { ...state.note, name: payload },
      };
    case noteActionTypes.SET_NOTE_CAT:
      return {
        ...state,
        note: { ...state.note, category: payload },
      };
    case noteActionTypes.SET_NOTE_TEXT:
      return {
        ...state,
        note: { ...state.note, text: payload },
      };
    case notesActionTypes.CLEAR_NOTE:
      return {
        ...state,
        note: initialState.note,
      };

    case notesActionTypes.ARCHIVE_NOTE:
      return {
        notes: archiveNote(state.notes, payload),
        note: initialState.note,
      };
    case notesActionTypes.ARCHIVE_NOTES:
      return {
        notes: archiveNotes(state.notes),
        note: initialState.note,
      };

    case notesActionTypes.REMOVE_NOTE:
      return {
        notes: removeNote(state.notes, payload),
        note: initialState.note,
      };
    case notesActionTypes.REMOVE_NOTES:
      return { ...state, notes: [] };
    case notesActionTypes.EDIT_NOTE:
      return {
        notes: updateNoteData(state.notes, state.note.id, state.note),
        note: initialState.note,
      };
    default:
      return state;
  }
};

const createNote = (note: noteState): noteState => {
  return {
    id: Date.now(),
    name: note.name,
    category: note.category,
    creationDate: getFormatedDate(Date.now()),
    text: note.text,
    isArchived: false,
    internalDates: getDatesFromText(note.text) ?? [],
  };
};

const findNote = (notes: noteState[], id: number): noteState | undefined =>
  notes.find((note) => note.id === id);

const archiveNote = (notes: noteState[], id: number): noteState[] => {
  return notes.map((note) => {
    if (note.id === id) {
      return {
        ...note,
        isArchived: !note.isArchived,
      };
    }
    return note;
  });
};

const archiveNotes = (notes: noteState[]): noteState[] => {
  return notes.map((note) => {
    return {
      ...note,
      isArchived: true,
    };
  });
};

const removeNote = (notes: noteState[], id: number): noteState[] =>
  notes.filter((elem) => elem.id !== id);

const updateNoteData = (
  notes: noteState[],
  id: number,
  new_data: noteState
): noteState[] => {
  return notes.map((note) => {
    if (note.id === id) {
      return {
        ...note,
        name: new_data.name,
        category: new_data.category,
        text: new_data.text,
        internalDates: getDatesFromText(new_data.text) ?? [],
      };
    }
    return note;
  });
};

const getFormatedDate = (date: number): string => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const getDatesFromText = (text: string): RegExpMatchArray | null => {
  let rgxp =
    // eslint-disable-next-line no-useless-escape
    /((0?[1-9]|[1-2][0-9]|3[0-1])[\/\-\.](0?[1-9]|1[0-2])[\/\.\-](\d{4}))|((0?[1-9]|1[0-2])[\/\.\-](0?[1-9]|[1-2][0-9]|3[0-1])[\/\-\.](\d{4}))/g;

  return text.match(rgxp);
};
