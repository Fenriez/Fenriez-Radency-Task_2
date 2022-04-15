import { useDispatch } from "react-redux";
import NotesContainer from "./components/NotesContainer";
import CustomButton from "./components/UI/buttons/custom/CustomButton";
import IconicButton from "./components/UI/buttons/iconic/IconicButton";
import NoteForm from "./components/UI/forms/NoteForm";
import CustomModal from "./components/UI/modal/CustomModal";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { toggleModal } from "./store/actions/modalActions";
import { archiveAllNotes, removeAllNotes } from "./store/actions/noteActions";
import "./styles/App.css";

function App() {
  const { modalVisible } = useTypedSelector((state) => state.modal);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="App_content">
        <section className="container notes">
          <div className="container__header">
            <div className="header__cell"></div>
            <div className="header__cell">Name</div>
            <div className="header__cell">Created</div>
            <div className="header__cell">Category</div>
            <div className="header__cell">Content</div>
            <div className="header__cell">Dates</div>
            <div className="header__cell">
              <IconicButton
                type="archiveAll"
                onClick={archiveAllNotes}
              />
              <IconicButton
                type="deleteAll"
                onClick={removeAllNotes}
              />
            </div>
          </div>
          <NotesContainer />
          <div className="container__footer">
            <div className="footer__cell"></div>
            <div className="footer__cell">
              <CustomButton
                text="Create note"
                type="button"
                onClick={() => {
                  dispatch(toggleModal());
                }}
              />
            </div>
          </div>
        </section>
        <section className="container categories"></section>
      </div>
      <CustomModal active={modalVisible}>
        <NoteForm></NoteForm>
      </CustomModal>
    </div>
  );
}

export default App;
