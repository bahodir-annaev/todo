import { OrderedMap } from 'immutable';
import * as React from 'react';
import { Filters } from '../constants';
import { TaskModel } from '../models/TaskModel';
import { TodoAppearance } from '../models/TodoSettingsModel';
import { TodoItem } from './TodoItem';

interface ITodoListProps {
  activeFilter: Filters;
  appearance: TodoAppearance;
  tasks: OrderedMap<number, TaskModel>;
  removeTask(index: number): void;
  toggleFinished(index: number): void;
}

export class TodoList extends React.Component<ITodoListProps> {
  render() {
    const toDoItemsList = this.filterTasks(this.props.tasks)
      .toArray()
      .map(([ key, task ]) => (
        <TodoItem
          appearance={this.props.appearance}
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
        case Filters.ALL:
          return true;
        default:
          throw new Error(`undefined filtering parameter [${this.props.activeFilter}] passed!`);
      }
    });
  };
}
