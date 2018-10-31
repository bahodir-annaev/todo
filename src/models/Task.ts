import { Constants } from '../constants';

export class Task {
  public complete = false;
  public description = '';
  public priority = Constants.PRIORITY_NORMAL;

  constructor(complete?: boolean, description?: string, priority?: Constants) {
    this.complete = complete || this.complete;
    this.description = description || this.description;
    this.priority = priority || this.priority;
  }

  static create(props: Partial<Task>): Task {
    return new Task(props.complete, props.description, props.priority);
  }
}
