import { Record } from 'immutable';
import * as React from 'react';
import { Priorities } from '../constants';
import { LanguageContext } from '../contexts/LanguageContext';
import { SettingsContext } from '../contexts/SettingsContext';
import { TaskModel } from '../models/TaskModel';

interface ITodoEditorProps {
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
      <LanguageContext.Consumer>
        {(context) => (
          <div className='Container'>
            <h4>{context.addNew}</h4>
            <div>
              <form onSubmit={this.handleAdd}>
                <input
                  className='Input'
                  type='text'
                  value={this.state.editorState.description}
                  onChange={this.handleDescriptionChange}
                  placeholder={context.enterDescription}
                />
                <SettingsContext.Consumer>
                  {({ functionality }) =>
                    functionality.priority ? (
                      <select
                        className='Select'
                        id='task-priority'
                        value={this.state.editorState.priority}
                        onChange={this.handlePriorityChange}
                      >
                        <option value={Priorities.PRIORITY_LOW}>{context.priorityLow}</option>
                        <option value={Priorities.PRIORITY_NORMAL}>{context.priorityNormal}</option>
                        <option value={Priorities.PRIORITY_HIGH}>{context.priorityHigh}</option>
                      </select>
                    ) : null}
                </SettingsContext.Consumer>
                <button className='Button' type='submit'>
                  {context.addButton}
                </button>
              </form>
            </div>
          </div>
        )}
      </LanguageContext.Consumer>
    );
  }
}
