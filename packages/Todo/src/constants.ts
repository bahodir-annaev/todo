export const enum Priorities {
  PRIORITY_LOW = 'priority_low',
  PRIORITY_NORMAL = 'priority_number',
  PRIORITY_HIGH = 'priority_high',
}

export const enum Filters {
  ALL = 'filter_all',
  FINISHED = 'filter_finished',
  ACTIVE = 'filter_active',
}

export const enum UpdateTypes {
  ADD_TASK = 'ADD_TASK',
  CHANGE_FILTER = 'CHANGE_FILTER',
  REMOVE_TASK = 'REMOVE_TASK',
  TOGGLE_FINISHED = 'TOGGLE_FINISHED',
}

export const enum Labels {
  TODO_NAME = 'TO DOs',
  ADD_BUTTON = 'Add',
  ADD_NEW = 'Add new todo',
  REMOVE_BUTTON = 'Remove',
  FILTER_ALL = 'All',
  FILTER_FINISHED = 'Finished',
  FILTER_ACTIVE = 'Active',
}