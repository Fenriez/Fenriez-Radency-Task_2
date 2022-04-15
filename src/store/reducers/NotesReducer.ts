interface notesState {
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

export interface noteFormData {
  name: string;
  category: string;
  text: string;
}

enum notesActionTypes {
  ADD_NOTE = "ADD_NOTE",
  SET_NOTE = "SET_NOTE",
  CLEAR_NOTE = "CLEAR_NOTE",
  ARCHIVE_NOTE = "ARCHIVE_NOTE",
  ARCHIVE_NOTES = "ARCHIVE_NOTES",
  REMOVE_NOTE = "REMOVE_NOTE",
  REMOVE_NOTES = "REMOVE_NOTES",
  EDIT_NOTE = "EDIT_NOTE",
}

enum noteActionTypes {
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

const initialState: notesState = {
  notes: [],
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
      return { ...state, notes: initialState.notes };
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
