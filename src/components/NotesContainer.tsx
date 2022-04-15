import { useTypedSelector } from "../hooks/useTypedSelector";
import Note from "./Note";

const NotesContainer = () => {
  const { notes } = useTypedSelector((state) => state.notes);

  return (
    <div className="container__body">
      {notes.map((note): React.ReactElement => {
        return (
          <Note
            {...note}
            key={note.id}
            // id={note.id}
            // name={note.name}
            // category={note.category}
            // text={note.text}
            // isArchived={note.isArchived}
            // internalDates={note.internalDates}
          />
        );
      })}
    </div>
  );
};

export default NotesContainer;
