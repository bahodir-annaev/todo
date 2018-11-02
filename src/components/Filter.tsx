import * as React from 'react';
import { Filters } from '../constants';

interface IFilterProps {
  activeFilter: Filters;
  showFiltering: boolean;
  changeFilter(filterToActivate: Filters): void;
}

export const Filter = (props: IFilterProps) => {
  return props.showFiltering ? (
    <div className='filter-container'>
      Filter
      <button
        type='button'
        onClick={() => props.changeFilter(Filters.ALL)}
        className={props.activeFilter === Filters.ALL ? 'active-filter' : ''}
      >
        All
      </button>
      <button
        type='button'
        onClick={() => props.changeFilter(Filters.FINISHED)}
        className={props.activeFilter === Filters.FINISHED ? 'active-filter' : ''}
      >
        Finished
      </button>
      <button
        type='button'
        onClick={() => props.changeFilter(Filters.ACTIVE)}
        className={props.activeFilter === Filters.ACTIVE ? 'active-filter' : ''}
      >
        Active
      </button>
    </div>
  ) : null;
};
