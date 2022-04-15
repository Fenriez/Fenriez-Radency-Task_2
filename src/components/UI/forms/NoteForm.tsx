import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { toggleModal } from "../../../store/actions/modalActions";
import { clearNote } from "../../../store/actions/noteActions";
import {
  addNewNote,
  setNoteCategory,
  setNoteName,
  setNoteText,
  submitChanges
} from "../../../store/actions/noteFormActions";
import CustomButton from "../buttons/custom/CustomButton";

const NoteForm = () => {
  const { note } = useTypedSelector((state) => state.notes);
  const dispatch = useDispatch();

  const submitForm = (event: FormEvent): void => {
    event.preventDefault();

    if (!note.id) {
      dispatch(addNewNote());
    } else {
      dispatch(submitChanges());
    }
    dispatch(toggleModal());
  };

  const resetForm = (event: FormEvent): void => {
    dispatch(clearNote());
    dispatch(toggleModal());
  };

  return (
    <form id="note_form" onSubmit={submitForm} onReset={resetForm}>
      <h3 className="form_name">Edit note</h3>
      <input
        type="text"
        id="note_form__name_input"
        className="note_form__name_input"
        value={note.name}
        onChange={(e) => {
          dispatch(setNoteName(e.target.value));
        }}
      />
      <select
        required
        id="note_form__category_select"
        className="note_form__category_select"
        value={note.category}
        onChange={(e) => {
          dispatch(setNoteCategory(e.target.value));
        }}
      >
        <option value="" disabled hidden>
          Select category...
        </option>
        <option value="Task">Task</option>
        <option value="Idea">Idea</option>
        <option value="Random Thought">Random Thought</option>
      </select>
      <textarea
        id="note_form__text_input"
        className="note_form__text_input"
        rows={5}
        value={note.text}
        onChange={(e) => {
          dispatch(setNoteText(e.target.value));
        }}
      ></textarea>
      <div className="form__controls">
        <CustomButton text="Save" type="submit" form="note_form" />
        <CustomButton text="Cancel" type="reset" form="note_form" />
      </div>
    </form>
  );
};

export default NoteForm;
