import {
  Filters,
  ITodoUpdateModel,
  TaskModel,
  Todo,
  TodoSettingsModel,
  TodoStateModel,
} from '@pkg/todo';
import { OrderedMap, Record } from 'immutable';
import * as React from 'react';

interface IAppProps {
  activeFilter: Filters;
  settings: TodoSettingsModel;
  tasks: TaskModel[];
}

interface IAppState {
  todo: TodoStateModel;
}

export class App extends React.Component<IAppProps, IAppState> {
  readonly state = {
    todo: new TodoStateModel({
      activeFilter: this.props.activeFilter,
      tasks: OrderedMap(this.props.tasks.map((task) => [ task.id, task ] as [number, TaskModel])),
    }),
  };

  onChange = (update: ITodoUpdateModel) => {
    this.setState(({ todo }) => {
      switch (update.type) {
        case 'ADD_TASK':
          return {
            todo: todo.update('tasks', (tasks) => {
              return tasks.set(update.data.id, update.data);
            }),
          };
        case 'REMOVE_TASK':
          return {
            todo: todo.update('tasks', (tasks) => {
              return tasks.filter((_, key) => key !== update.data);
            }),
          };
        case 'CHANGE_FILTER':
          return {
            todo: todo.set('activeFilter', update.data as Filters),
          };
        case 'TOGGLE_FINISHED':
          return {
            todo: todo.update('tasks', (tasks) => {
              return tasks.update(update.data as number, (task) => task.toggle());
            }),
          };
        default: {
          throw Error('Unknown update type from todo component');
        }
      }
    });
  };

  render() {
    return (
      <div id='main'>
        <Todo state={this.state.todo} onChange={this.onChange} settings={this.props.settings} />
        <Todo state={this.state.todo} onChange={this.onChange} settings={this.props.settings} />
      </div>
    );
  }
}
