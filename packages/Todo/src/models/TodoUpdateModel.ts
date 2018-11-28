import { Record } from 'immutable';
import { Filters, UpdateTypes } from '../constants';
import { TaskModel } from './TaskModel';

interface ITodoUpdateModel {
  data: number | Filters | TaskModel;
  type: UpdateTypes;
}

export class TodoUpdateModel extends Record({ data: 0, type: UpdateTypes.NO_ACTION }) {
  static create(params: Partial<TodoUpdateModel>) {
    return new TodoUpdateModel(params);
  }
}
