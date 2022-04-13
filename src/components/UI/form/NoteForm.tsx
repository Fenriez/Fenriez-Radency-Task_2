import { Dispatch, FormEvent, SetStateAction } from "react";
import CustomButton from "../buttons/custom/CustomButton";

interface note_form_props {
    set_active: Dispatch<SetStateAction<boolean>>
}



const NoteForm = ({set_active}: note_form_props) => {

    const submitForm = (event: FormEvent): void => {
        event.preventDefault();
        console.log(event.target)
        set_active(false)
    }

    const closeForm = (): void => {
        set_active(false)
    }

  return (
    <form id="note_form" onSubmit={submitForm} >
      <h3 className="form_name">New note</h3>
      <input
        type="text"
        id="note_form__name_input"
        className="note_form__name_input"
      />
      <select
        required
        id="note_form__category_select"
        className="note_form__category_select"
        defaultValue="default"
      >
        <option value="default" disabled hidden>
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
      ></textarea>
      <div className="form__controls">
        <CustomButton text="Save" type="submit" form="note_form" />
        <CustomButton text="Cancel" type="reset" form="note_form" onClick={closeForm}/>
      </div>
    </form>
  );
};

export default NoteForm;
