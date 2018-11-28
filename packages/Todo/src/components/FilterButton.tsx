import * as React from 'react';
import { Filters } from '../constants';

interface IFilterButtonProps {
  filterType: Filters;
  isActive: boolean;
  label: string;
  onClick(filterToActivate: Filters): void;
}

export const FilterButton = (props: IFilterButtonProps) => {
  return (
    <button
      type='button'
      onClick={() => props.onClick(props.filterType)}
      className={`${props.isActive ? 'Button--active' : ''} Button`}
    >
      {props.label}
    </button>
  );
};
