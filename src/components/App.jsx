import * as React from "react";
import { ToDoEditor } from "./ToDoEditor";
import { ToDoList } from "./ToDoList";

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

    _removeTask(index){
        this.setState((oldState) => {
            const leftTasks = oldState.tasks.filter((task,taskIndex) => taskIndex !== index);
            return {tasks: leftTasks}
        });
    }

    _toggleComplete(index){
        this.setState((oldState) => {
            const updatedTasks = oldState.tasks.map((task, taskIndex) =>{
                if(taskIndex == index) {
                    task.complete = !task.complete;
                }
                return task;
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
