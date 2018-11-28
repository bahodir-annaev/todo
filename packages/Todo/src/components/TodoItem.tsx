import * as React from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { TaskModel } from '../models/TaskModel';
import { TodoAppearance } from '../models/TodoSettingsModel';
import { SettingsContext } from '../contexts/SettingsContext';

interface ITodoItemProps {
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
    return (
      <SettingsContext.Consumer>
        {({ appearance }) => {
          const finished = this.props.task.finished ? this.getFinishedTaskStyle(appearance) : {};

          return (
            <div className={`${this.props.task.finished ? 'Todo__Item--finished' : ''} Todo__Item`}>
              <input
                className='Checkbox'
                type='checkbox'
                onChange={this.props.toggleFinished}
                checked={this.props.task.finished}
              />
              <label style={finished}>{this.props.task.description}</label>
              <button onClick={this.props.removeTask} className='Button'>
                <LanguageContext.Consumer>
                  {(context) => context.removeButton}
                </LanguageContext.Consumer>
              </button>
            </div>
          );
        }}
      </SettingsContext.Consumer>
    );
  }
}
