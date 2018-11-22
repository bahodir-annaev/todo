import * as React from 'react';
import { Filters, Labels } from '../constants';

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
        {Labels.FILTER_ALL}
      </button>
      <button
        type='button'
        onClick={() => props.changeFilter(Filters.FINISHED)}
        className={props.activeFilter === Filters.FINISHED ? 'active-filter' : ''}
      >
        {Labels.FILTER_FINISHED}
      </button>
      <button
        type='button'
        onClick={() => props.changeFilter(Filters.ACTIVE)}
        className={props.activeFilter === Filters.ACTIVE ? 'active-filter' : ''}
      >
        {Labels.FILTER_ACTIVE}
      </button>
    </div>
  ) : null;
};
