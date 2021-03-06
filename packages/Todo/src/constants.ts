export const enum Priorities {
  PRIORITY_LOW = 'PRIORITY_LOW',
  PRIORITY_NORMAL = 'PRIORITY_NORMAL',
  PRIORITY_HIGH = 'PRIORITY_HIGH',
}

export const enum Filters {
  ALL = 'FILTER_ALL',
  FINISHED = 'FILTER_FINISHED',
  ACTIVE = 'FILTER_ACTIVE',
}

export const enum UpdateTypes {
  ADD_TASK = 'ADD_TASK',
  CHANGE_FILTER = 'CHANGE_FILTER',
  REMOVE_TASK = 'REMOVE_TASK',
  TOGGLE_FINISHED = 'TOGGLE_FINISHED',
  NO_ACTION = '',
}
