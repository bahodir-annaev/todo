import { Filters, TaskModel, ToDo, ToDoSettingsModel } from '@pkg/todo';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const tasks = [
  TaskModel.create({ description: 'Learn React' }),
  TaskModel.create({ description: 'Learn TypeScript' }),
];
const settingsJson = require('../static/settings.json');
const settings = ToDoSettingsModel.create(settingsJson);

ReactDOM.render(
  <ToDo activeFilter={Filters.ALL} settings={settings} tasks={tasks} />,
  document.getElementById('root'),
);
