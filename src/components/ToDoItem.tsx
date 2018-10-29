import * as React from "react";
import { Task } from "../models/Task";

export interface ToDoItemProps {
    toggleComplete(event: React.MouseEvent<HTMLInputElement>): void,
    removeTask(event: React.MouseEvent<HTMLInputElement>): void,
    task: Task,
}

export class ToDoItem extends React.Component<ToDoItemProps> {
    render(): React.ReactNode{
        return (
            <div>
                <input type="checkbox" onClick={this.props.toggleComplete} checked={this.props.task.complete}/>&nbsp;
                <span className={this.props.task.complete ? "complete": ""}> {this.props.task.description}</span>&nbsp;
                <input type="button" onClick={this.props.removeTask}  value="Remove"/>
            </div>
        );
    }
}