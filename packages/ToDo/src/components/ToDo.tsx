import { List, Record } from 'immutable';
import * as React from 'react';
import { Filters } from '../constants';
import { Task } from '../models/Task';
import { IToDoSettingsModel } from '../models/ToDoSettingsModel';
import { Filter } from './Filter';
import { ToDoEditor } from './ToDoEditor';
import { ToDoList } from './ToDoList';

interface IToDoProps {
  activeFilter: Filters;
  settings: IToDoSettingsModel;
  tasks: Task[];
}

const ToDoStateRecord = Record({ activeFilter: Filters.ALL, tasks: List<Task>() });

interface IToDoState {
  activeFilter: Filters;
  tasks: List<Task>;
}

interface IToDoAppState {
  todoState: Record<IToDoState>;
}

export class ToDo extends React.Component<IToDoProps, IToDoAppState> {
  readonly state = {
    todoState: ToDoStateRecord({
      activeFilter: this.props.activeFilter,
      tasks: List([ ...this.props.tasks ]),
    }),
  };

  addTask = (newTask: Task) => {
    this.setState((oldState) => {
      return {
        todoState: oldState.todoState.update('tasks', (oldTasks) => oldTasks.push(newTask)),
      };
    });
  };

  changeFilter = (filterToActivate: Filters) => {
    this.setState((oldState) => {
      return { todoState: oldState.todoState.set('activeFilter', filterToActivate) };
    });
  };

  removeTask = (removeTaskId: number) => {
    this.setState((oldState) => {
      const removeIndex = oldState.todoState
        .get('tasks')
        .findIndex((task) => task.id === removeTaskId);
      const updatedState = oldState.todoState.deleteIn([ 'tasks', removeIndex ]);

      return { todoState: updatedState };
    });
  };

  render() {
    return (
      <div>
        <h1>TO DOs</h1>
        <ToDoEditor addTask={this.addTask} functionality={this.props.settings.functionality} />
        <ToDoList
          settings={this.props.settings}
          activeFilter={this.state.todoState.get('activeFilter')}
          tasks={this.state.todoState.get('tasks')}
          removeTask={this.removeTask}
          toggleComplete={this.toggleComplete}
        />

        <Filter
          showFiltering={this.props.settings.functionality.filtering}
          activeFilter={this.state.todoState.get('activeFilter')}
          changeFilter={this.changeFilter}
        />
      </div>
    );
  }

  toggleComplete = (toggleTaskId: number) => {
    this.setState((oldState) => {
      const toggleIndex = oldState.todoState
        .get('tasks')
        .findIndex((task) => task.id === toggleTaskId);
      const updatedState = oldState.todoState.updateIn([ 'tasks', toggleIndex ], (task) =>
        task.toggle(),
      );

      return { todoState: updatedState };
    });
  };
}
