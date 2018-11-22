import { Filters } from '../constants';
import { TaskModel } from './TaskModel';

export interface ITodoUpdateModel {
  data: number | Filters | TaskModel;
  type: string;
}
