import CategoriesSection from "./components/CategoriesSection";
import NotesSection from "./components/NotesSection";
import NoteForm from "./components/UI/forms/NoteForm";
import CustomModal from "./components/UI/modal/CustomModal";
import { useTypedSelector } from "./hooks/useTypedSelector";
import "./styles/App.css";

function App() {
  const { modalVisible } = useTypedSelector((state) => state.modal);

  return (
    <div className="App">
      <div className="App_content">
        <NotesSection />
        <CategoriesSection />
      </div>
      <CustomModal active={modalVisible}>
        <NoteForm></NoteForm>
      </CustomModal>
    </div>
  );
}

export default App;
