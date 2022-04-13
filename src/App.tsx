import { useState } from "react";
import Note from "./components/Note";
import CustomButton from "./components/UI/buttons/custom/CustomButton";
import NoteForm from "./components/UI/form/NoteForm";
import CustomModal from "./components/UI/modal/CustomModal";
import "./styles/App.css";

function App() {

  const [visible, setVisible] = useState(false)

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
              <button id="archived_visibility" className="iconic_button">
                <i className="fa-solid fa-box-archive"></i>
              </button>
              <button id="delete_all" className="iconic_button">
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
          <div className="container__body">
            <Note />
          </div>
          <div className="container__footer">
            <div className="footer__cell"></div>
            <div className="footer__cell">
              <CustomButton text="Create note" onClick={() => {setVisible(true)}}/>
            </div>
          </div>
        </section>
        <section className="container categories"></section>
      </div>
      <CustomModal active={visible}>
        <NoteForm set_active={setVisible}></NoteForm>
      </CustomModal>
    </div>
  );
}

export default App;
