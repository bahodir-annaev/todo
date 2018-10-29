import * as React from "react";
import { ToDoItem } from "./ToDoItem";
import { Task } from "../models/Task";

export interface ToDoListProps {
    tasks: Array<Task>,
    toggleComplete(index: number): void,
    removeTask(index: number): void
}

export class ToDoList extends React.Component<ToDoListProps> {
    render(): React.ReactNode{
        const todoItemsList = this.props.tasks.map((task, index) => {
            return (
                <ToDoItem task={task} key={index} 
                removeTask={() => this.props.removeTask(index)} 
                toggleComplete={() => this.props.toggleComplete(index)}/>
            );
        });
        return (
            <div>
                {todoItemsList}
            </div>
        );
    }
}
