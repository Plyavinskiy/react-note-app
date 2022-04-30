import { connect } from 'react-redux';
import { toggleNote, deleteNote } from '../../actions';
import NoteList from './NoteList';
import { VisibilityFilters } from '../../actions';

const getVisibleNotes = (notes, filter) => {
  switch(filter) {
    case VisibilityFilters.SHOW_ALL:
      return notes;
    case VisibilityFilters.SHOW_ARCHIVED:
      return notes.filter(t => t.archived);
    case VisibilityFilters.SHOW_ACTIVE:
      return notes.filter(t => !t.archived);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
}

const mapStateToProps = (state) => ({
  notes: getVisibleNotes(state.notes, state.visibilityFilter)
});

const mapDispatchToProps = (dispatch) => ({
  toggleNote: id => dispatch(toggleNote(id)),
  deleteNote: id => dispatch(deleteNote(id)),
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
