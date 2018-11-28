import * as React from 'react';
import { Filters } from '../constants';
import { LanguageContext } from '../contexts/LanguageContext';
import { SettingsContext } from '../contexts/SettingsContext';
import { FilterButton } from './FilterButton';

interface IFilterProps {
  activeFilter: Filters;
  changeFilter(filterToActivate: Filters): void;
}

export const Filter = (props: IFilterProps) => {
  return (
    <SettingsContext.Consumer>
      {({ functionality }) => {
        return functionality.filtering ? (
          <LanguageContext.Consumer>
            {(context) => (
              <div className='Container Text--Center'>
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
      }}
    </SettingsContext.Consumer>
  );
};
