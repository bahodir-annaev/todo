import * as React from "react";
import { ToDoEditor } from "./ToDoEditor";
import { ToDoList } from "./ToDoList";
import { Task } from "../models/Task";

export class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: [...props.tasks]
        }

        this.addTask = this._addTask.bind(this);
        this.removeTask = this._removeTask.bind(this);
        this.toggleComplete = this._toggleComplete.bind(this);
    }

    _addTask(newTask){
        this.setState((oldState) => {
            return {tasks: [...oldState.tasks, newTask]}
        });
    }

    _removeTask(removeTaskIndex){
        this.setState((oldState) => {
            const leftTasks = oldState.tasks.filter((task,taskIndex) => taskIndex !== removeTaskIndex);
            return {tasks: leftTasks}
        });
    }

    _toggleComplete(toggleTaskIndex){
        this.setState((oldState) => {
            const updatedTasks = oldState.tasks.map((task, taskIndex) =>{
                if(taskIndex == toggleTaskIndex) {
                    return new Task({...task, complete: !task.complete});
                }else{
                    return task;
                }
                
            });
            return {tasks: updatedTasks}
        });
        
    }

    render() {
        return (
            <div>
                <h1>TO DOs</h1>
                <ToDoEditor addTask={this.addTask}/>
                <ToDoList tasks={this.state.tasks} removeTask={this.removeTask} toggleComplete={this.toggleComplete}/>
            </div>
        );
    }
}
