import { Filters, IToDoSettingsModel, Task, ToDo } from '@pkg/todo';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const tasks = [
  Task.create({ description: 'Learn React' }),
  Task.create({ description: 'Learn TypeScript' }),
];

const settings: IToDoSettingsModel = require('../static/settings.json');

ReactDOM.render(
  <ToDo activeFilter={Filters.ALL} settings={settings} tasks={tasks} />,
  document.getElementById('root'),
);
