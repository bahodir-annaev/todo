import * as React from 'react';
import { Filters } from '../constants';
import { Task } from '../models/Task';
import { ToDoItem } from './ToDoItem';

export interface IToDoListProps {
  activeFilter: Filters;
  settings: any;
  tasks: Task[];
  removeTask(index: number): void;
  toggleComplete(index: number): void;
}

export class ToDoList extends React.Component<IToDoListProps> {
  render(): React.ReactNode {
    const toDoItemsList: JSX.Element[] = [];
    for (const [ index, task ] of this.props.tasks.entries()) {
      if (this.filterTask(task)) continue;
      toDoItemsList.push(
        <ToDoItem
          appearance={this.props.settings.appearance}
          task={task}
          key={index}
          removeTask={() => this.props.removeTask(index)}
          toggleComplete={() => this.props.toggleComplete(index)}
        />,
      );
    }

    return <div>{toDoItemsList}</div>;
  }

  private filterTask = (task: Task) => {
    switch (this.props.activeFilter) {
      case Filters.ACTIVE: {
        return task.complete;
        break;
      }
      case Filters.FINISHED: {
        return !task.complete;
        break;
      }
      default:
        return false;
    }
  };
}
