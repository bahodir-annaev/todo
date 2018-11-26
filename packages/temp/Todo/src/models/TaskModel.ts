import { Record } from 'immutable';
import { Priorities } from '../constants';

let id = 0;
export class TaskModel extends Record({
  description: '',
  finished: false,
  id: 0,
  priority: Priorities.PRIORITY_NORMAL,
}) {
  constructor(props?: Partial<TaskModel>) {
    super(props);

    return props && !props.id ? this.set('id', id++) : this;
  }

  static create(props: Partial<TaskModel>) {
    return new TaskModel(props);
  }

  toggle() {
    return this.set('finished', !this.finished);
  }
}
