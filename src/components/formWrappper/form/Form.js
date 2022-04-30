import React from 'react';
import { addNote, editNote, setFormInvisible } from '../../../actions';
import { connect } from 'react-redux';
import { getDatesFromText } from '../../../helpers/getDatesFromText';
import { generateRandomID } from '../../../helpers/generateRandomID';
import './Form.css';

const Form = ({note, onClick, cancel, dispatch}) => {
  const emptyObj = {
    id: -1,
    name: '',
    category: 'Task',
    dateOfCreation: new Date(),
    text: '',
    datesFromText: [],
    archived: false
  };

  const [value, setValue] = React.useState(emptyObj);
  const [prevNote, setPrevNote] = React.useState({});

  if (!!note
     && !!Object.keys(note).length
     && JSON.stringify(prevNote) !== JSON.stringify(note)) {
    setPrevNote({...prevNote, ...note});
    setValue({...value, ...note});
  }

  function submitHandler(e) {
    e.preventDefault();

    if (!value.name.trim()
      || !value.category.trim()
      || !value.text.trim()) {
      return;
    }

    onClick({
      ...value,
      id: (!note) ? generateRandomID(10) : value.id,
      dateOfCreation: (!note) ? new Date() : value.dateOfCreation,
      datesFromText: getDatesFromText(value.text)
    }, !!note);

    setValue({
      ...value,
      id: -1,
      name: '',
      category: 'Task',
      text: ''
    });
  }

  function onChange(e) {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <input value={value.name} name={'name'} placeholder={'Name'} onChange={onChange} required/>
      <select value={value.category} name={'category'} onChange={onChange} required>
        <option value={'Task'}>Task</option>
        <option value={'Idea'}>Idea</option>
        <option value={'Quote'}>Quote</option>
        <option value={'Thought'}>Thought</option>
      </select>
      <textarea value={value.text} name={'text'} placeholder={'Text'} onChange={onChange} required/>
      <div className={'button-section'}>
        <button onClick={cancel}>Cancel</button>
        <button type='submit'>
          {!!note ? 'Edit' : 'Add'}
        </button>
      </div>
    </form>
  );
}

const mapStateToProps = (state) => ({
  note: state.formVisibilityControl.note
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (note, isDataPassed) => {
    if (isDataPassed) {
      dispatch(editNote(note));
    } else {
      dispatch(addNote(note));
    }

    dispatch(setFormInvisible());
  },
  cancel: () => dispatch(setFormInvisible()),
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
