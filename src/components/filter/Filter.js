import React from 'react';
import FilterLink from './link/FilterLink';
import { VisibilityFilters } from '../../actions';
import './Filter.css';

const Filter = () => (
  <div className={'filter'}>
    <span>Show notes:</span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ARCHIVED}>
      Archived
    </FilterLink>
  </div>
);

export default Filter;
