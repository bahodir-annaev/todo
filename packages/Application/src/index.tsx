import { Filters, TaskModel, TodoSettingsModel } from '@pkg/todo';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';

const tasks = [
  TaskModel.create({ description: 'Learn React' }),
  TaskModel.create({ description: 'Learn TypeScript' }),
];
// tslint:disable-next-line: no-var-requires no-require-imports
const settingsJson = require('../static/settings.json');
const settings = TodoSettingsModel.create(settingsJson);

ReactDOM.render(
  <App activeFilter={Filters.ALL} settings={settings} tasks={tasks} />,
  document.getElementById('root'),
);
