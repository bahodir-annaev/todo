import { Record } from 'immutable';
import * as React from 'react';
import { Labels, Priorities } from '../constants';
import { TaskModel } from '../models/TaskModel';
import { TodoFunctionalityRecord } from '../models/TodoSettingsModel';

interface ITodoEditorProps {
  functionality: TodoFunctionalityRecord;
  addTask(task: TaskModel): void;
}

class EditorState extends Record({
  description: '',
  priority: Priorities.PRIORITY_NORMAL,
}) {}

const DEFAULT_EDITOR_STATE = new EditorState();

interface ITodoEditorState {
  editorState: EditorState;
}
export class TodoEditor extends React.Component<ITodoEditorProps, ITodoEditorState> {
  readonly state = { editorState: DEFAULT_EDITOR_STATE };

  handleAdd = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.addTask(TaskModel.create(this.state.editorState));
    this.setState({ editorState: DEFAULT_EDITOR_STATE });
  };

  handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ editorState: this.state.editorState.set('description', event.target.value) });
  };

  handlePriorityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      editorState: this.state.editorState.set('priority', event.target.value as Priorities),
    });
  };

  render() {
    return (
      <div>
        <h3>{Labels.ADD_NEW}</h3>
        <div>
          <form onSubmit={this.handleAdd}>
            <input
              type='text'
              value={this.state.editorState.description}
              onChange={this.handleDescriptionChange}
              placeholder='Enter description'
            />
            <label htmlFor='task-priority'> Priority </label>
            {this.props.functionality.priority ? (
              <select
                id='task-priority'
                value={this.state.editorState.priority}
                onChange={this.handlePriorityChange}
              >
                <option value={Priorities.PRIORITY_LOW}>Low</option>
                <option value={Priorities.PRIORITY_NORMAL}>Normal</option>
                <option value={Priorities.PRIORITY_HIGH}>High</option>
              </select>
            ) : null}
            <button type='submit'>{Labels.ADD_BUTTON}</button>
          </form>
        </div>
      </div>
    );
  }
}
