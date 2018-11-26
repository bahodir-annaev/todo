import * as React from 'react';
import { Filters, Labels, UpdateTypes } from '../constants';
import { TaskModel } from '../models/TaskModel';
import { TodoSettingsModel } from '../models/TodoSettingsModel';
import { TodoStateModel } from '../models/TodoStateModel';
import { TodoUpdateModel } from '../models/TodoUpdateModel';
import { Filter } from './Filter';
import { TodoEditor } from './TodoEditor';
import { TodoList } from './TodoList';

interface ITodoProps {
  settings: TodoSettingsModel;
  state: TodoStateModel;
  onChange(update: TodoUpdateModel): void;
}

export class Todo extends React.Component<ITodoProps> {
  addTask = (newTask: TaskModel) => {
    this.props.onChange(TodoUpdateModel.create({ data: newTask, type: UpdateTypes.ADD_TASK }));
  };

  changeFilter = (filterToActivate: Filters) => {
    this.props.onChange(
      TodoUpdateModel.create({ data: filterToActivate, type: UpdateTypes.CHANGE_FILTER }),
    );
  };

  removeTask = (removeTaskId: number) => {
    this.props.onChange(
      TodoUpdateModel.create({ data: removeTaskId, type: UpdateTypes.REMOVE_TASK }),
    );
  };

  render() {
    return (
      <div className='Todo'>
        <h1>{Labels.TODO_NAME}</h1>
        <TodoEditor addTask={this.addTask} functionality={this.props.settings.functionality} />
        <TodoList
          appearance={this.props.settings.appearance}
          activeFilter={this.props.state.activeFilter}
          tasks={this.props.state.tasks}
          removeTask={this.removeTask}
          toggleFinished={this.toggleFinished}
        />

        <Filter
          showFiltering={this.props.settings.functionality.filtering}
          activeFilter={this.props.state.activeFilter}
          changeFilter={this.changeFilter}
        />
      </div>
    );
  }

  toggleFinished = (toggleTaskId: number) => {
    this.props.onChange(
      TodoUpdateModel.create({ data: toggleTaskId, type: UpdateTypes.TOGGLE_FINISHED }),
    );
  };
}
