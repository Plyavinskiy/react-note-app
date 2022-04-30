import { default as initialState } from "./initialState";

const notes = (state = initialState, action) => {
  switch(action.type) {
    case 'INIT_NOTES':
      return [
        ...state,
        ...action.notes
      ];
    case 'ADD_NOTE':
      return [
        ...state,
        {...action.note}
      ];
    case 'EDIT_NOTE':
      return state.map(note => (
        note.id === action.note.id
          ? action.note
          : note
      ));
    case 'TOGGLE_NOTE':
      return state.map(note => (
        note.id === action.id
          ? {...note, archived: !note.archived}
          : note
      ));
    case 'DELETE_NOTE':
      return state.filter(note => note.id !== action.id);
    default:
      return state;
  }
}

// console.log(notes);
export default notes;
