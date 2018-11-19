import * as React from 'react';
import { TaskModel } from '../models/TaskModel';
import { ToDoAppearanceRecord } from '../models/ToDoSettingsModel';

interface IToDoItemProps {
  appearance: ToDoAppearanceRecord;
  task: TaskModel;
  removeTask(event: React.MouseEvent): void;
  toggleFinished(event: React.ChangeEvent<HTMLInputElement>): void;
}

export class ToDoItem extends React.Component<IToDoItemProps> {
  getFinishedTaskStyle = (appearance: ToDoAppearanceRecord) => {
    const cssProperty =
      appearance.finishedTask.applyTo === 'background' ? 'backgroundColor' : 'color';
    const style: React.CSSProperties = {};
    style[cssProperty] = appearance.finishedTask.color;

    return style;
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
        <button onClick={this.props.removeTask}>Remove</button>
      </div>
    );
  }
}
