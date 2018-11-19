import { OrderedMap } from 'immutable';
import * as React from 'react';
import { Filters } from '../constants';
import { TaskModel } from '../models/TaskModel';
import { ToDoSettingsModel } from '../models/ToDoSettingsModel';
import { ToDoItem } from './ToDoItem';

interface IToDoListProps {
  activeFilter: Filters;
  settings: ToDoSettingsModel;
  tasks: OrderedMap<number, TaskModel>;
  removeTask(index: number): void;
  toggleFinished(index: number): void;
}

export class ToDoList extends React.Component<IToDoListProps> {
  render() {
    const toDoItemsList = this.filterTasks(this.props.tasks)
      .entrySeq()
      .map(([ key, task ]) => (
        <ToDoItem
          appearance={this.props.settings.appearance}
          task={task}
          key={key}
          removeTask={() => this.props.removeTask(key)}
          toggleFinished={() => this.props.toggleFinished(key)}
        />
      ));

    return <div id='task-list'>{toDoItemsList}</div>;
  }

  private filterTasks = (tasks: OrderedMap<number, TaskModel>) => {
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
