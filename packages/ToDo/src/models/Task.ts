import { Record } from 'immutable';
import { Priorities } from '../constants';

interface ITaskParams {
  complete?: boolean;
  description?: string;
  id?: number;
  priority?: Priorities;
}

let id = 0;
export class Task extends Record({
  complete: false,
  description: '',
  id: 0,
  priority: Priorities.PRIORITY_NORMAL,
}) {
  constructor(props: ITaskParams) {
    super(props);
  }

  static create(props: ITaskParams): Task {
    const task = props.id ? new Task({ ...props }) : new Task({ ...props, id: id++ });

    return task;
  }

  toggle() {
    return this.set('complete', !this.complete) as this;
  }
}
