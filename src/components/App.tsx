import * as React from 'react';
import { Filters } from '../constants';
import { Task } from '../models/Task';
import { Filter } from './Filter';
import { ToDoEditor } from './ToDoEditor';
import { ToDoList } from './ToDoList';

const settings = require('../../static/settings.json');

interface ITaskList {
  activeFilter: Filters;
  tasks: Task[];
}

export class App extends React.Component<ITaskList, ITaskList> {
  readonly state = { activeFilter: this.props.activeFilter, tasks: [ ...this.props.tasks ] };

  addTask = (newTask: Task) => {
    this.setState((oldState) => {
      return { tasks: [ ...oldState.tasks, newTask ] };
    });
  };

  changeFilter = (filterToActivate: Filters) => {
    this.setState((oldState) => {
      return { activeFilter: filterToActivate };
    });
  };

  removeTask = (removeTaskIndex: number) => {
    this.setState((oldState) => {
      const leftTasks = oldState.tasks.filter((task, taskIndex) => taskIndex !== removeTaskIndex);

      return { tasks: leftTasks };
    });
  };

  render(): React.ReactNode {
    return (
      <div>
        <h1>TO DOs</h1>
        <ToDoEditor addTask={this.addTask} />
        <ToDoList
          settings={settings}
          activeFilter={this.state.activeFilter}
          tasks={this.state.tasks}
          removeTask={this.removeTask}
          toggleComplete={this.toggleComplete}
        />
        {settings.functionality.filtering ? (
          <Filter activeFilter={this.state.activeFilter} changeFilter={this.changeFilter} />
        ) : null}
      </div>
    );
  }

  toggleComplete = (toggleTaskIndex: number) => {
    this.setState((oldState) => {
      const updatedTasks = oldState.tasks.map((task, taskIndex) => {
        if (taskIndex === toggleTaskIndex) {
          return Task.create({ ...task, complete: !task.complete });
        } else {
          return task;
        }
      });

      return { tasks: updatedTasks };
    });
  };
}
