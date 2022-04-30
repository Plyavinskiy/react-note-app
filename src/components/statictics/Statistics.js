import React from 'react';
import { connect } from 'react-redux';
import StatRow from './statRow/StatRow';
import { generateRandomID } from '../../helpers/generateRandomID';

const Statistics = ({statistic}) => {
  return (
    statistic.length
      ? <ul>
          <StatRow header={true}/>
          {statistic.map(obj => (
            <StatRow
              key={generateRandomID(10)}
              obj={obj}
            />
          ))}
        </ul>
      : <p>The list is empty!</p>
  );
}

const generateStats = (notes) => {
  let statistics = [];

  notes.forEach(note => {
    let index = statistics.findIndex(s => (
      s.category === note.category
    ));

    if (index > -1) {
      statistics[index].summary++;

      if (note.archived) {
        statistics[index].archived++;
      }
    } else {
      statistics.push({
        category: note.category,
        summary: 1,
        archived: (note.archived) ? 1 : 0
      });
    }
  });

  return statistics;
}

const mapStateToProps = (state) => ({
  statistic: generateStats(state.notes)
});

export default connect(mapStateToProps, undefined)(Statistics);
