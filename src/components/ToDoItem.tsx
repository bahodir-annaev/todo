import * as React from 'react';
import { Task } from '../models/Task';

export interface IToDoItemProps {
  appearance: any;
  task: Task;
  removeTask(event: React.MouseEvent<HTMLInputElement>): void;
  toggleComplete(event: React.MouseEvent<HTMLInputElement>): void;
}

export class ToDoItem extends React.Component<IToDoItemProps> {
  render(): React.ReactNode {
    const finished = {
      backgroundColor: this.props.appearance.finished.color,
    };

    return (
      <div className='item-container'>
        <input
          type='checkbox'
          onClick={this.props.toggleComplete}
          checked={this.props.task.complete}
        />
        <span
          className={this.props.task.complete ? 'complete item-desc' : 'item-desc'}
          style={this.props.task.complete ? finished : {}}
        >
          {this.props.task.description}
        </span>
        <input type='button' onClick={this.props.removeTask} value='Remove' />
      </div>
    );
  }
}
