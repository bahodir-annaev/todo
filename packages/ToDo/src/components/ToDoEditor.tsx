import * as React from 'react';
import { Priorities } from '../constants';
import { Task } from '../models/Task';
import { IToDoFunctionality } from '../models/ToDoSettingsModel';

interface IToDoEditorProps {
  functionality: IToDoFunctionality;
  addTask(task: Task): void;
}

interface IToDoEditorState {
  description: string;
  priority: Priorities;
}
export class ToDoEditor extends React.Component<IToDoEditorProps, IToDoEditorState> {
  readonly state = { description: '', priority: Priorities.PRIORITY_NORMAL };

  handleAdd = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.addTask(Task.create({ ...this.state }));
    this.setState({ description: '', priority: Priorities.PRIORITY_NORMAL });
  };

  handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ description: event.target.value });
  };

  handlePriorityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ priority: parseInt(event.target.value, 10) });
  };

  render() {
    return (
      <div>
        <h3>Add new todo</h3>
        <div>
          <form onSubmit={this.handleAdd}>
            <input
              type='text'
              value={this.state.description}
              onChange={this.handleDescriptionChange}
              placeholder='Enter description'
            />
            <label htmlFor='task-priority'> Priority </label>
            {this.props.functionality.priority ? (
              <select
                id='task-priority'
                value={this.state.priority}
                onChange={this.handlePriorityChange}
              >
                <option value={Priorities.PRIORITY_LOW}>Low</option>
                <option value={Priorities.PRIORITY_NORMAL}>Normal</option>
                <option value={Priorities.PRIORITY_HIGH}>High</option>
              </select>
            ) : null}
            <button type='submit'>Add</button>
          </form>
        </div>
      </div>
    );
  }
}
