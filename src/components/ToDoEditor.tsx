import * as React from 'react';
import { Priorities } from '../constants';
import { Task } from '../models/Task';

export class ToDoEditor extends React.Component<{ addTask(task: Task): void }, Task> {
  readonly state = Task.create({});

  handleAdd = (event: React.FormEvent<HTMLFormElement>) => {
    this.props.addTask(Task.create({ ...this.state }));
    this.setState(Task.create({}));
    event.preventDefault();
  };

  handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ description: event.target.value });
  };

  handlePriorityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ priority: parseInt(event.target.value, 10) });
  };

  render(): React.ReactNode {
    return (
      <div>
        <h3>Add new todo</h3>
        <div>
          <form onSubmit={this.handleAdd} action='#'>
            <input
              type='text'
              value={this.state.description}
              onChange={this.handleDescriptionChange}
              placeholder='Enter description'
            />
            <label htmlFor='task-priority'> Priority </label>
            <select
              id='task-priority'
              value={this.state.priority}
              onChange={this.handlePriorityChange}
            >
              <option value={Priorities.PRIORITY_LOW}>Low</option>
              <option value={Priorities.PRIORITY_NORMAL}>Normal</option>
              <option value={Priorities.PRIORITY_HIGH}>High</option>
            </select>
            <input type='submit' value='Add' />
          </form>
        </div>
      </div>
    );
  }
}
