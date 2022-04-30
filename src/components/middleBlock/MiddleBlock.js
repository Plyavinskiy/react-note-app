import React from 'react'
import { connect } from 'react-redux';
import { setFormVisible } from '../../actions';
import './MiddleBlock.css';

const MiddleBlock = ({onClick, event}) => {
  let [previousEvent, setPreviousEvent] = React.useState({});

  if (event
    && Object.keys(event).length
    && JSON.stringify(previousEvent) !== JSON.stringify(event)) {
    setPreviousEvent({...event});
  }

  return (
    <div className={'middle-block'}>
      <button onClick={onClick}>Create note</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  event: state.announcerSetter
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(setFormVisible(null))
});

export default connect(mapStateToProps, mapDispatchToProps)(MiddleBlock);
