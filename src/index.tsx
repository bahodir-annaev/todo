import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App';
import { Filters } from './constants';
import { Task } from './models/Task';

const tasks = [
  Task.create({ description: 'Learn React' }),
  Task.create({ description: 'Learn TypeScript' }),
];

ReactDOM.render(<App activeFilter={Filters.ALL} tasks={tasks} />, document.getElementById('root'));
