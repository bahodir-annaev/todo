import * as React from 'react';
import { Filters } from '../constants';
import { Task } from '../models/Task';
import { IToDoSettingsModel } from '../models/ToDoSettingsModel';
import { ToDoItem } from './ToDoItem';
import { List } from 'immutable';

interface IToDoListProps {
  activeFilter: Filters;
  settings: IToDoSettingsModel;
  tasks: List<Task>;
  removeTask(index: number): void;
  toggleComplete(index: number): void;
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
          toggleComplete={() => this.props.toggleComplete(task.id)}
        />
      );
    });

    return <div>{toDoItemsList}</div>;
  }

  private filterTasks = (tasks: List<Task>) => {
    return tasks.filter((task) => {
      switch (this.props.activeFilter) {
        case Filters.ACTIVE: {
          return !task.complete;
          break;
        }
        case Filters.FINISHED: {
          return task.complete;
          break;
        }
        default:
          return true;
      }
    });
  };
}
