import * as React from 'react';
import { Filters, Labels } from '../constants';

interface IFilterButtonProps {
  filterType: Filters;
  isActive: boolean;
  label: Labels;
  onClick(filterToActivate: Filters): void;
}

export const FilterButton = (props: IFilterButtonProps) => {
  return (
    <button
      type='button'
      onClick={() => props.onClick(props.filterType)}
      className={props.isActive ? 'active-filter' : ''}
    >
      {props.label}
    </button>
  );
};
