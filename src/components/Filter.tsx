import * as React from 'react';
import { Filters } from '../constants';

interface IFilterProps {
  activeFilter: Filters;
  changeFilter(filterToActivate: Filters): void;
}

export const Filter: React.SFC<IFilterProps> = (props: IFilterProps) => {
  return (
    <div className='filter-container'>
      Filter
      <input
        type='button'
        value='All'
        onClick={() => props.changeFilter(Filters.ALL)}
        className={props.activeFilter === Filters.ALL ? 'active-filter' : ''}
      />
      <input
        type='button'
        value='Finished'
        onClick={() => props.changeFilter(Filters.FINISHED)}
        className={props.activeFilter === Filters.FINISHED ? 'active-filter' : ''}
      />
      <input
        type='button'
        value='Active'
        onClick={() => props.changeFilter(Filters.ACTIVE)}
        className={props.activeFilter === Filters.ACTIVE ? 'active-filter' : ''}
      />
    </div>
  );
};
