import * as React from 'react';
import { Task } from '../models/Task';
import { ToDoEditor } from './ToDoEditor';
import { ToDoList } from './ToDoList';

interface ITaskList {
  tasks: Task[];
}

export class App extends React.Component<ITaskList, ITaskList> {
  readonly state = { tasks: [ ...this.props.tasks ] };

  addTask = (newTask: Task) => {
    this.setState((oldState) => {
      return { tasks: [ ...oldState.tasks, newTask ] };
    });
  };

  removeTask = (removeTaskIndex: number) => {
    this.setState((oldState) => {
      const leftTasks = oldState.tasks.filter((task, taskIndex) => taskIndex !== removeTaskIndex);

      return { tasks: leftTasks };
    });
  };

  render(): React.ReactNode {
    return (
      <div>
        <h1>TO DOs</h1>
        <ToDoEditor addTask={this.addTask} />
        <ToDoList
          tasks={this.state.tasks}
          removeTask={this.removeTask}
          toggleComplete={this.toggleComplete}
        />
      </div>
    );
  }

  toggleComplete = (toggleTaskIndex: number) => {
    this.setState((oldState) => {
      const updatedTasks = oldState.tasks.map((task, taskIndex) => {
        if (taskIndex === toggleTaskIndex) {
          return Task.create({ ...task, complete: !task.complete });
        } else {
          return task;
        }
      });

      return { tasks: updatedTasks };
    });
  };
}
