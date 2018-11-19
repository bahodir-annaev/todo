import { List } from 'immutable';
import * as React from 'react';
import { Filters } from '../constants';
import { TaskModel } from '../models/TaskModel';
import { ToDoSettingsModel } from '../models/ToDoSettingsModel';
import { ToDoItem } from './ToDoItem';

interface IToDoListProps {
  activeFilter: Filters;
  settings: ToDoSettingsModel;
  tasks: List<TaskModel>;
  removeTask(index: number): void;
  toggleFinished(index: number): void;
}

export class ToDoList extends React.Component<IToDoListProps> {
  render() {
    const toDoItemsList = this.filterTasks(this.props.tasks).map((task) => {
      return (
        <ToDoItem
          appearance={this.props.settings.appearance}
          task={task}
          key={task.id}
          removeTask={() => this.props.removeTask(task.id)}
          toggleFinished={() => this.props.toggleFinished(task.id)}
        />
      );
    });

    return <div>{toDoItemsList}</div>;
  }

  private filterTasks = (tasks: List<TaskModel>) => {
    return tasks.filter((task) => {
      switch (this.props.activeFilter) {
        case Filters.ACTIVE:
          return !task.finished;
        case Filters.FINISHED:
          return task.finished;
        default:
          return true;
      }
    });
  };
}
