import * as React from 'react';
import { Task } from '../models/Task';

export interface IToDoItemProps {
  task: Task;
  removeTask(event: React.MouseEvent<HTMLInputElement>): void;
  toggleComplete(event: React.MouseEvent<HTMLInputElement>): void;
}

export class ToDoItem extends React.Component<IToDoItemProps> {
  render(): React.ReactNode {
    return (
      <div>
        <input
          type='checkbox'
          onClick={this.props.toggleComplete}
          checked={this.props.task.complete}
        />&nbsp;
        <span className={this.props.task.complete ? 'complete' : ''}>
          {this.props.task.description}
        </span>&nbsp;
        <input type='button' onClick={this.props.removeTask} value='Remove' />
      </div>
    );
  }
}
