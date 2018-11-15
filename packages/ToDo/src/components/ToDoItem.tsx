import * as React from 'react';
import { Task } from '../models/Task';
import { IToDoAppearanceRecord } from '../models/ToDoSettingsModel';

interface IToDoItemProps {
  appearance: IToDoAppearanceRecord;
  task: Task;
  removeTask(event: React.MouseEvent): void;
  toggleComplete(event: React.ChangeEvent<HTMLInputElement>): void;
}

export class ToDoItem extends React.Component<IToDoItemProps> {
  getFinishedTaskStyle = (appearance: IToDoAppearanceRecord) => {
    const cssProperty =
      appearance.getIn([ 'finishedTask', 'applyTo' ]) === 'background'
        ? 'backgroundColor'
        : 'color';
    const style: React.CSSProperties = {};
    style[cssProperty] = appearance.getIn([ 'finishedTask', 'color' ]);

    return style;
  };
  render() {
    const finished = this.getFinishedTaskStyle(this.props.appearance);

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
