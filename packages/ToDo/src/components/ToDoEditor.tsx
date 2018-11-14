import { Record } from 'immutable';
import * as React from 'react';
import { Priorities } from '../constants';
import { Task } from '../models/Task';
import { IToDoFunctionality } from '../models/ToDoSettingsModel';

interface IToDoEditorProps {
  functionality: IToDoFunctionality;
  addTask(task: Task): void;
}

const defaultEditorState: IEditorState = {
  description: '',
  priority: Priorities.PRIORITY_NORMAL,
};

const EditorStateRecord = Record(defaultEditorState);

interface IEditorState {
  description: string;
  priority: Priorities;
}

interface IToDoEditorState {
  editorState: Record<IEditorState>;
}
export class ToDoEditor extends React.Component<IToDoEditorProps, IToDoEditorState> {
  readonly state = { editorState: EditorStateRecord(defaultEditorState) };

  handleAdd = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.addTask(Task.create({ ...this.state.editorState.toJS() }));
    this.setState({ editorState: EditorStateRecord(defaultEditorState) });
  };

  handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ editorState: this.state.editorState.set('description', event.target.value) });
  };

  handlePriorityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      editorState: this.state.editorState.set('priority', parseInt(event.target.value, 10)),
    });
  };

  render() {
    return (
      <div>
        <h3>Add new todo</h3>
        <div>
          <form onSubmit={this.handleAdd}>
            <input
              type='text'
              value={this.state.editorState.get('description')}
              onChange={this.handleDescriptionChange}
              placeholder='Enter description'
            />
            <label htmlFor='task-priority'> Priority </label>
            {this.props.functionality.priority ? (
              <select
                id='task-priority'
                value={this.state.editorState.get('priority')}
                onChange={this.handlePriorityChange}
              >
                <option value={Priorities.PRIORITY_LOW}>Low</option>
                <option value={Priorities.PRIORITY_NORMAL}>Normal</option>
                <option value={Priorities.PRIORITY_HIGH}>High</option>
              </select>
            ) : null}
            <button type='submit'>Add</button>
          </form>
        </div>
      </div>
    );
  }
}
