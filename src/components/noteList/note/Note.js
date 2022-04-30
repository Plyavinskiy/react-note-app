import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { setFormVisible } from '../../../actions';
import { connect } from 'react-redux';
import './Note.css';
import SVGContainer from './container/SVGContainer';
import DataContainer from './container/DataContainer';

const Note = memo(({setFormVisible, toggleNote, deleteNote, note, header}) => {
  if (!header) {
    const dateOfCreation = { month: 'long', day: 'numeric', year: 'numeric' };

    return (
      <li style={{textDecoration: note.archived ? 'line-through' : 'none'}}>
        <SVGContainer data={note.category} primary={true}/>
        <DataContainer className={'name'} data={note.name}/>
        <DataContainer className={'dateOfCreation'} data={note.dateOfCreation.toLocaleDateString('en-CA', dateOfCreation)} tertiary={true}/>
        <DataContainer className={'category'} data={note.category} secondary={true}/>
        <DataContainer className={'text'} data={note.text}/>
        <DataContainer className={'datesFromText'} data={note.datesFromText.join(', ')} tertiary={true}/>
        <SVGContainer data={'edit'} clickHandler={setFormVisible}/>
        <SVGContainer data={(note.archived) ? 'archived' : ''} clickHandler={toggleNote}/>
        <SVGContainer data={'delete'} clickHandler={deleteNote}/>
      </li>
    );
  } else {
    return (
      <li style={{fontWeight: 'bold', backgroundColor: 'lightblue'}}>
        <SVGContainer primary={true}/>
        <DataContainer className={'name'} data={'Name'}/>
        <DataContainer className={'dateOfCreation'} data={'Created'} secondary={true}/>
        <DataContainer className={'category'} data={'Category'} tertiary={true}/>
        <DataContainer className={'text'} data={'Content'}/>
        <DataContainer className={'datesFromText'} data={'Dates'} tertiary={true}/>
        <SVGContainer/>
        <SVGContainer/>
        <SVGContainer/>
      </li>
    );
  }
})

Note.propTypes = {
  toggleNote: PropTypes.func,
  deleteNote: PropTypes.func
};

const mapStateToProps = (state, ownProps) => ({
  note: ownProps.note
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setFormVisible: () => (
    dispatch(setFormVisible(ownProps.note))
  ),
  toggleNote: ownProps.toggleNote,
  deleteNote: ownProps.deleteNote
});

export default connect(mapStateToProps, mapDispatchToProps)(Note);
