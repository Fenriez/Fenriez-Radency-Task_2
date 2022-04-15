import { useDispatch } from 'react-redux';
import { toggleModal } from '../store/actions/modalActions';
import { archiveAllNotes, removeAllNotes } from '../store/actions/noteActions';
import NotesContainer from './NotesContainer';
import CustomButton from './UI/buttons/custom/CustomButton';
import IconicButton from './UI/buttons/iconic/IconicButton';

const NotesSection = () => {
  const dispatch = useDispatch();

  return (
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
  )
}

export default NotesSection