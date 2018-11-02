import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App';
import { Filters } from './constants';
import { Task } from './models/Task';
import { IToDoSettingsModel } from './models/ToDoSettingsModel';

const tasks = [
  Task.create({ description: 'Learn React' }),
  Task.create({ description: 'Learn TypeScript' }),
];

const settings: IToDoSettingsModel = require('../static/settings.json');

ReactDOM.render(
  <App activeFilter={Filters.ALL} settings={settings} tasks={tasks} />,
  document.getElementById('root'),
);
