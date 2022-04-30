import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Filter from './filter/Filter';
import VisibleNoteList from './noteList/VisibleNoteList';
import MiddleBlock from './middleBlock/MiddleBlock';
import Statistics from './statictics/Statistics';
import FormWrapper from './formWrappper/FormWrapper';
import { initNotes } from '../actions';

const App = ({formVisibility, dispatch, notes}) => {
  React.useEffect(
    () => {
      dispatch(
        initNotes(
          localStorage.getItem('notes')
            ? JSON
                .parse(localStorage.getItem('notes'))
                .map(note => {
                  return {
                    ...note,
                    dateOfCreation: new Date(note.dateOfCreation)
                  };
                })
            : []
        )
      )
    },
    []
  );

  React.useEffect(
    () => {
      localStorage.setItem('notes', JSON.stringify(notes));
    },
    [notes]
  );

  return (
    <div className={'view'}>
      <section>
        <Filter/>
        <VisibleNoteList/>
        <MiddleBlock/>
      </section>
      <section>
        <Statistics/>
      </section>
      {formVisibility ? <FormWrapper className={'form-wrapper'}/> : null}
    </div>
  );
}

const mapStateToProps = (state) => ({
  formVisibility: state.formVisibilityControl.visibility,
  notes: state.notes
});


export default connect(mapStateToProps, undefined)(App);
