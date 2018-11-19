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
    if (props && !props.id) {
      super({ ...props, id: id++ } as Partial<TaskModel>);
    } else {
      super(props);
    }
  }

  static create(props: Partial<TaskModel>) {
    return new TaskModel(props);
  }

  toggle() {
    return this.set('finished', !this.finished);
  }
}
