import React from 'react';
import PropTypes from 'prop-types';
import Note from './note/Note';
import './NoteList.css';

const NoteList = ({notes, toggleNote, deleteNote, dispatch}) => {
  return (
    notes.length
      ? <ul>
          <Note header={true}/>
          {notes.map(note => (
            <Note
              key={note.id}
              note={note}
              toggleNote={() => toggleNote(note.id)}
              deleteNote={() => deleteNote(note.id)}
            />
          ))}
        </ul>
      : <p>The list is empty!</p>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes
      .shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        dateOfCreation: PropTypes.object.isRequired,
        archived: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired,
        datesFromText: PropTypes.array.isRequired,
        category: PropTypes.string.isRequired
      })
      .isRequired),
  toggleNote: PropTypes.func,
  deleteNote: PropTypes.func
}

export default NoteList;
