import Note from "./components/Note";
import "./styles/App.css";

function App() {
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
              <button id="create_note" className="custom_btn">
                Create note
              </button>
            </div>
          </div>
        </section>
        <section className="container categories"></section>
      </div>
    </div>
  );
}

export default App;
