import * as React from 'react';
import { LanguageContext } from '../LanguageContext';
import { Filters } from '../constants';
import { FilterButton } from './FilterButton';

interface IFilterProps {
  activeFilter: Filters;
  showFiltering: boolean;
  changeFilter(filterToActivate: Filters): void;
}

export const Filter = (props: IFilterProps) => {
  return props.showFiltering ? (
    <LanguageContext.Consumer>
      {(context) => (
        <div className='filter'>
          <FilterButton
            filterType={Filters.ALL}
            label={context.filterAllButton}
            onClick={props.changeFilter}
            isActive={props.activeFilter === Filters.ALL}
          />
          <FilterButton
            filterType={Filters.FINISHED}
            label={context.filterFinishedButton}
            onClick={props.changeFilter}
            isActive={props.activeFilter === Filters.FINISHED}
          />
          <FilterButton
            filterType={Filters.ACTIVE}
            label={context.filterActiveButton}
            onClick={props.changeFilter}
            isActive={props.activeFilter === Filters.ACTIVE}
          />
        </div>
      )}
    </LanguageContext.Consumer>
  ) : null;
};
