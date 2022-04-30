export const initNotes = (notes) => ({
  type: 'INIT_NOTES',
  notes
});

export const addNote = (note) => ({
  type: 'ADD_NOTE',
  note
});

export const editNote = (note) => ({
  type: 'EDIT_NOTE',
  note
});

export const toggleNote = (id) => ({
  type: 'TOGGLE_NOTE',
  id
});

export const deleteNote = (id) => ({
  type: 'DELETE_NOTE',
  id
});

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const setFormVisible = (note) => ({
  type: 'SET_FORM_VISIBLE',
  note
});

export const setFormInvisible = () => ({
  type: 'SET_FORM_INVISIBLE'
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ARCHIVED: 'SHOW_ARCHIVED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};
