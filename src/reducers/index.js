import { combineReducers } from 'redux';
import notes from './notes';
import visibilityFilter from './visibilityFilter';
import formVisibilityControl from './formVisibilityControl';

export default combineReducers({
  notes,
  visibilityFilter,
  formVisibilityControl
});
