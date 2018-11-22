import { Record } from 'immutable';
import { Priorities } from '../constants';

let id = 0;
export class TaskModel extends Record({
  description: '',
  finished: false,
  id: 0,
  priority: Priorities.PRIORITY_NORMAL,
}) {
  constructor(props: Partial<TaskModel>) {
    super(props);

    if (props && !props.id) {
      return this.set('id', id++);
    }
  }

  static create(props: Partial<TaskModel>) {
    return new TaskModel(props);
  }

  toggle() {
    return this.set('finished', !this.finished);
  }
}
