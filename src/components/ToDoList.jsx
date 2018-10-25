import * as React from "react";
import { ToDoItem } from "./ToDoItem";

export class ToDoList extends React.Component {
    render(){
        const todoItemsList = this.props.tasks.map((task, index) => {
            return <ToDoItem task={task} removeTaskCallback={() => {this.props.removeTaskCallback(index)}} />
        });
        return (
            <div>
                {todoItemsList}
            </div>
        );
    }
}