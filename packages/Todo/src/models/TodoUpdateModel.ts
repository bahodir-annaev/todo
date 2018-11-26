import { Record } from 'immutable';
import { Filters } from '../constants';
import { TaskModel } from './TaskModel';

interface ITodoUpdateModel {
  data: number | Filters | TaskModel;
  type: string;
}

export class TodoUpdateModel extends Record({ data: -1, type: '' }) {
  static create(params: Partial<TodoUpdateModel>) {
    return new TodoUpdateModel(params);
  }
}
