import { List, Record, OrderedMap } from 'immutable';
import * as React from 'react';
import { Filters } from '../constants';
import { TaskModel } from '../models/TaskModel';
import { ToDoSettingsModel } from '../models/ToDoSettingsModel';
import { Filter } from './Filter';
import { ToDoEditor } from './ToDoEditor';
import { ToDoList } from './ToDoList';

interface IToDoProps {
  activeFilter: Filters;
  settings: ToDoSettingsModel;
  tasks: TaskModel[];
}

class ToDoStateRecord extends Record({
  activeFilter: Filters.ALL,
  tasks: OrderedMap<number, TaskModel>(),
}) {}

interface IToDoAppState {
  todoState: ToDoStateRecord;
}

export class ToDo extends React.Component<IToDoProps, IToDoAppState> {
  readonly state = {
    todoState: new ToDoStateRecord({
      activeFilter: this.props.activeFilter,
      tasks: OrderedMap(this.props.tasks.map((task) => [ task.id, task ] as [number, TaskModel])),
    }),
  };

  addTask = (newTask: TaskModel) => {
    this.setState((oldState) => {
      return {
        todoState: oldState.todoState.update('tasks', (oldTasks) =>
          oldTasks.set(newTask.id, newTask),
        ),
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
      const updatedState = oldState.todoState.update('tasks', (tasks) => {
        return tasks.filter((task, key) => key !== removeTaskId);
      });

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
          activeFilter={this.state.todoState.activeFilter}
          tasks={this.state.todoState.tasks}
          removeTask={this.removeTask}
          toggleFinished={this.toggleFinished}
        />

        <Filter
          showFiltering={this.props.settings.functionality.filtering}
          activeFilter={this.state.todoState.activeFilter}
          changeFilter={this.changeFilter}
        />
      </div>
    );
  }

  toggleFinished = (toggleTaskId: number) => {
    this.setState((oldState) => {
      const updatedState = oldState.todoState.updateIn([ 'tasks', toggleTaskId ], (task) =>
        task.toggle(),
      );

      return { todoState: updatedState };
    });
  };
}
