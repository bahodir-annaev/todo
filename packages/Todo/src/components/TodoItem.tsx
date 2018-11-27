import * as React from 'react';
import { LanguageContext } from '../LanguageContext';
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
      <div className={`${this.props.task.finished ? 'todo-item--finished' : ''} todo-item`}>
        <input
          className='todo-item__checkbox'
          type='checkbox'
          onChange={this.props.toggleFinished}
          checked={this.props.task.finished}
        />
        <label className='todo-item__description' style={finished}>
          {this.props.task.description}
        </label>
        <button onClick={this.props.removeTask} className='button'>
          {this.context.removeButton}
        </button>
      </div>
    );
  }
}

TodoItem.contextType = LanguageContext;
