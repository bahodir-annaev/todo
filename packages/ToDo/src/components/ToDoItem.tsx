import * as React from 'react';
import { Task } from '../models/Task';
import { IToDoAppearance, IToDoFunctionality } from '../models/ToDoSettingsModel';

interface IToDoItemProps {
  appearance: IToDoAppearance;
  task: Task;
  removeTask(event: React.MouseEvent): void;
  toggleComplete(event: React.ChangeEvent<HTMLInputElement>): void;
}

export class ToDoItem extends React.Component<IToDoItemProps> {
  getFinishedTaskStyle = (finishedTask: { applyTo: string; color: string }) => {
    const cssProperty = finishedTask.applyTo === 'background' ? 'backgroundColor' : 'color';
    const style: React.CSSProperties = {};
    style[cssProperty] = finishedTask.color;

    return style;
  };
  render() {
    const finished = this.getFinishedTaskStyle(this.props.appearance.finishedTask);

    return (
      <div className='item-container'>
        <input
          type='checkbox'
          onChange={this.props.toggleComplete}
          checked={this.props.task.complete}
        />
        <span
          className={`${this.props.task.complete ? 'complete' : ''} item-desc`}
          style={this.props.task.complete ? finished : {}}
        >
          {this.props.task.description}
        </span>
        <button onClick={this.props.removeTask}>Remove</button>
      </div>
    );
  }
}
