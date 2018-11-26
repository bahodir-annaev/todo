import * as React from 'react';
import { Labels } from '../constants';
import { TaskModel } from '../models/TaskModel';
import { TodoAppearance } from '../models/TodoSettingsModel';

interface ITodoItemProps {
  appearance: TodoAppearance;
  task: TaskModel;
  removeTask(event: React.MouseEvent): void;
  toggleFinished(event: React.ChangeEvent<HTMLInputElement>): void;
}

export class TodoItem extends React.Component<ITodoItemProps> {
  getFinishedTaskStyle = ({ finishedTask }: TodoAppearance) => {
    return {
      [finishedTask.applyTo === 'background' ? 'backgroundColor' : 'color']: finishedTask.color,
    };
  };
  render() {
    const finished = this.props.task.finished
      ? this.getFinishedTaskStyle(this.props.appearance)
      : {};

    return (
      <div className='item-container'>
        <input
          type='checkbox'
          onChange={this.props.toggleFinished}
          checked={this.props.task.finished}
        />
        <span
          className={`${this.props.task.finished ? 'finished' : ''} item-desc`}
          style={finished}
        >
          {this.props.task.description}
        </span>
        <button onClick={this.props.removeTask}>{Labels.REMOVE_BUTTON}</button>
      </div>
    );
  }
}
