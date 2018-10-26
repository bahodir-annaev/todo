import * as React from "react";
import { ToDoItem } from "./ToDoItem";

export class ToDoList extends React.Component {
    render(){
        const todoItemsList = this.props.tasks.map((task, index) => {
            return (
                <ToDoItem task={task} 
                removeTask={() => {this.props.removeTask(index)}} 
                toggleComplete={() => {this.props.toggleComplete(index)}}/>
            );
        });
        return (
            <div>
                {todoItemsList}
            </div>
        );
    }
}