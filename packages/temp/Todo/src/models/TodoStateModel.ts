import { OrderedMap, Record } from 'immutable';
import { Filters } from '../constants';
import { TaskModel } from './TaskModel';

export class TodoStateModel extends Record({
  activeFilter: Filters.ALL,
  tasks: OrderedMap<number, TaskModel>(),
}) {}
