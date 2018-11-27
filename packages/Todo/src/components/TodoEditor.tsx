import { Record } from 'immutable';
import * as React from 'react';
import { Labels, Priorities } from '../constants';
import { TaskModel } from '../models/TaskModel';
import { TodoFunctionality } from '../models/TodoSettingsModel';

interface ITodoEditorProps {
  functionality: TodoFunctionality;
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
    event.persist();
    this.setState((oldState) => {
      return { editorState: oldState.editorState.set('description', event.target.value) };
    });
  };

  handlePriorityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.persist();
    this.setState((oldState) => {
      return {
        editorState: oldState.editorState.set('priority', event.target.value as Priorities),
      };
    });
  };

  render() {
    return (
      <div className='todo-editor'>
        <h4 className='todo-editor__label'>{this.context.addNew}</h4>
        <div>
          <form onSubmit={this.handleAdd} className='todo-editor__form'>
            <input
              className='todo-editor__description'
              type='text'
              value={this.state.editorState.description}
              onChange={this.handleDescriptionChange}
              placeholder={this.context.enterDescription}
            />
            {this.props.functionality.priority ? (
              <select
                className='todo-editor__priority'
                id='task-priority'
                value={this.state.editorState.priority}
                onChange={this.handlePriorityChange}
              >
                <option value={Priorities.PRIORITY_LOW}>Low</option>
                <option value={Priorities.PRIORITY_NORMAL}>Normal</option>
                <option value={Priorities.PRIORITY_HIGH}>High</option>
              </select>
            ) : null}
            <button className='todo-editor__submit button' type='submit'>
              {this.context.addButton}
            </button>
          </form>
        </div>
      </div>
    );
  }
}
