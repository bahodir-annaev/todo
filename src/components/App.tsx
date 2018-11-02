import * as React from 'react';
import { Filters } from '../constants';
import { Task } from '../models/Task';
import { IToDoSettingsModel } from '../models/ToDoSettingsModel';
import { Filter } from './Filter';
import { ToDoEditor } from './ToDoEditor';
import { ToDoList } from './ToDoList';

interface IAppProps {
  activeFilter: Filters;
  settings: IToDoSettingsModel;
  tasks: Task[];
}

interface IAppState {
  activeFilter: Filters;
  tasks: Task[];
}

export class App extends React.Component<IAppProps, IAppState> {
  readonly state = {
    activeFilter: this.props.activeFilter,
    tasks: [ ...this.props.tasks ],
  };

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

  removeTask = (removeTaskId: number) => {
    this.setState((oldState) => {
      const leftTasks = oldState.tasks.filter((task) => task.id !== removeTaskId);

      return { tasks: leftTasks };
    });
  };

  render() {
    return (
      <div>
        <h1>TO DOs</h1>
        <ToDoEditor addTask={this.addTask} functionality={this.props.settings.functionality} />
        <ToDoList
          settings={this.props.settings}
          activeFilter={this.state.activeFilter}
          tasks={this.state.tasks}
          removeTask={this.removeTask}
          toggleComplete={this.toggleComplete}
        />

        <Filter
          showFiltering={this.props.settings.functionality.filtering}
          activeFilter={this.state.activeFilter}
          changeFilter={this.changeFilter}
        />
      </div>
    );
  }

  toggleComplete = (toggleTaskId: number) => {
    this.setState((oldState) => {
      const updatedTasks = oldState.tasks.map((task) => {
        if (task.id === toggleTaskId) {
          return Task.create({ ...task, complete: !task.complete });
        } else {
          return task;
        }
      });

      return { tasks: updatedTasks };
    });
  };
}
