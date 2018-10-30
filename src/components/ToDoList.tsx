import * as React from 'react';
import { Task } from '../models/Task';
import { ToDoItem } from './ToDoItem';

export interface IToDoListProps {
  tasks: Task[];
  removeTask(index: number): void;
  toggleComplete(index: number): void;
}

export class ToDoList extends React.Component<IToDoListProps> {
  render(): React.ReactNode {
    const todoItemsList = this.props.tasks.map((task, index) => {
      return (
        <ToDoItem
          task={task}
          key={index}
          removeTask={() => this.props.removeTask(index)}
          toggleComplete={() => this.props.toggleComplete(index)}
        />
      );
    });

    return <div>{todoItemsList}</div>;
  }
}
