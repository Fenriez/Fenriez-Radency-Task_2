import {
  faCircleExclamation,
  faLightbulb,
  faPoo
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  archiveNote,
  editNote,
  removeNote
} from "../store/actions/noteActions";
import { noteState } from "../store/reducers/NotesReducer";
import IconicButton from "./UI/buttons/iconic/IconicButton";

const Note = ({ ...props }: noteState) => {
  let internal_dates = props.internalDates.join(", ");

  let tag: React.ReactNode;

  switch (props.category) {
    case "Task":
      tag = <FontAwesomeIcon icon={faCircleExclamation} />;
      break;
    case "Idea":
      tag = <FontAwesomeIcon icon={faLightbulb} size="lg" />;
      break;
    case "Random Thought":
      tag = <FontAwesomeIcon icon={faPoo} size="lg" />;
      break;
    default:
      break;
  }

  return (
    <div className="note">
      <div className="note__cell">{tag}</div>
      <div className="note__cell font_color__black">
        <p>{props.name}</p>
      </div>
      <div className="note__cell">
        <p>{props.creationDate.toString()}</p>
      </div>
      <div className="note__cell">
        <p>{props.category}</p>
      </div>
      <div className="note__cell">
        <p>{props.text}</p>
      </div>
      <div className="note__cell">
        <p>{internal_dates}</p>
      </div>
      <div className="note__cell">
        <IconicButton type="edit" onClick={editNote} targetID={props.id} />
        <IconicButton
          type="archive"
          onClick={archiveNote}
          targetID={props.id}
        />
        <IconicButton type="delete" onClick={removeNote} targetID={props.id} />
      </div>
    </div>
  );
};

export default Note;
