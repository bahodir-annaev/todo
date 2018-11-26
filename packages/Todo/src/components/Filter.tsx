import * as React from 'react';
import { Filters, Labels } from '../constants';
import { FilterButton } from './FilterButton';

interface IFilterProps {
  activeFilter: Filters;
  showFiltering: boolean;
  changeFilter(filterToActivate: Filters): void;
}

export const Filter = (props: IFilterProps) => {
  return props.showFiltering ? (
    <div className='filter-container'>
      Filter
      <FilterButton
        filterType={Filters.ALL}
        label={Labels.FILTER_ALL}
        onClick={props.changeFilter}
        isActive={props.activeFilter === Filters.ALL}
      />
      <FilterButton
        filterType={Filters.FINISHED}
        label={Labels.FILTER_FINISHED}
        onClick={props.changeFilter}
        isActive={props.activeFilter === Filters.FINISHED}
      />
      <FilterButton
        filterType={Filters.ACTIVE}
        label={Labels.FILTER_ACTIVE}
        onClick={props.changeFilter}
        isActive={props.activeFilter === Filters.ACTIVE}
      />
    </div>
  ) : null;
};
