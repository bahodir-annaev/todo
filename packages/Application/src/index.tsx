import { Filters, ToDoSettingsModel, Task, ToDo } from '@pkg/todo';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const tasks = [
  Task.create({ description: 'Learn React' }),
  Task.create({ description: 'Learn TypeScript' }),
];

const settingsJson = require('../static/settings.json');
const settings = ToDoSettingsModel.create(settingsJson);

ReactDOM.render(
  <ToDo activeFilter={Filters.ALL} settings={settings} tasks={tasks} />,
  document.getElementById('root'),
);
