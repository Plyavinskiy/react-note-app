import React from 'react';
import SVGContainer from '../../noteList/note/container/SVGContainer';
import DataContainer from '../../noteList/note/container/DataContainer';

const StatRow = ({obj, header}) => {
  if (!header) {
    return (
      <li>
        <SVGContainer data={obj.category}/>
        <DataContainer className={'text'} data={obj.category} primary={true}/>
        <DataContainer className={'number'} data={obj.summary - obj.archived}/>
        <DataContainer className={'number'} data={obj.archived}/>
        <DataContainer className={'number'} data={obj.summary}/>
      </li>
    );
  } else {
    return (
      <li style={{fontWeight: 'bold', backgroundColor: 'lightblue'}}>
        <SVGContainer/>
        <DataContainer className={'text'} data={'Note Category'} primary={true}/>
        <DataContainer className={'number'} data={'Active'}/>
        <DataContainer className={'number'} data={'Archived'}/>
        <DataContainer className={'number'} data={'Summary'}/>
      </li>
    );
  }
};

export default StatRow;
