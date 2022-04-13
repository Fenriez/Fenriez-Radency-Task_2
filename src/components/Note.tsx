import IconicButton from './UI/buttons/iconic/IconicButton';

const Note = () => {


  return (
    <div className="note">
      <div className="note__cell"></div>
      <div className="note__cell">
        <p></p>
      </div>
      <div className="note__cell">
        <p></p>
      </div>
      <div className="note__cell">
        <p></p>
      </div>
      <div className="note__cell">
        <p></p>
      </div>
      <div className="note__cell">
        <p></p>
      </div>
      <div className="note__cell">
        <IconicButton type='edit'/>
        <IconicButton type='archive'/>
        <IconicButton type='delete'/>
      </div>
    </div>
  );
};

export default Note;
