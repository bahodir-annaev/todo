import { Priorities } from '../constants';

let id = 0;
export class Task {
  public complete = false;
  public description = '';
  public id = 0;
  public priority = Priorities.PRIORITY_NORMAL;

  constructor(complete?: boolean, description?: string, priority?: Priorities) {
    this.id = id++;
    this.complete = complete || this.complete;
    this.description = description || this.description;
    this.priority = priority || this.priority;
  }

  static create(props: Partial<Task>): Task {
    return new Task(props.complete, props.description, props.priority);
  }
}
