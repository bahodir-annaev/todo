import {
  Filters,
  SettingsContext,
  TaskModel,
  Todo,
  TodoSettingsModel,
  TodoStateModel,
  TodoUpdateModel,
  UpdateTypes,
} from '@pkg/todo';
import { OrderedMap } from 'immutable';
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

  onChange = (update: TodoUpdateModel) => {
    this.setState(
      ({ todo }) => {
        switch (update.type) {
          case UpdateTypes.ADD_TASK:
            return {
              todo: todo.update('tasks', (tasks) => {
                return tasks.set(update.data.id, update.data);
              }),
            };
          case UpdateTypes.REMOVE_TASK:
            return {
              todo: todo.set('tasks', todo.tasks.delete(update.data)),
            };
          case UpdateTypes.CHANGE_FILTER:
            return {
              todo: todo.set('activeFilter', update.data),
            };
          case UpdateTypes.TOGGLE_FINISHED:
            return {
              todo: todo.update('tasks', (tasks) => {
                return tasks.update(update.data, (task) => task.toggle());
              }),
            };
          default: {
            throw Error(`Unknown update type [${update.type}] from todo component`);
          }
        }
      },
      () => {
        // tslint:disable-next-line:no-console
        console.log(
          `Update todo state with type [${update.type}] and data [${update.data.toString()}]`,
        );
      },
    );
  };

  render() {
    return (
      <div className='App'>
        <SettingsContext.Provider value={this.props.settings}>
          <Todo state={this.state.todo} onChange={this.onChange} />
        </SettingsContext.Provider>
      </div>
    );
  }
}
