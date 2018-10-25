import * as React from "react";
import { ToDoEditor } from "./ToDoEditor";
import { ToDoList } from "./ToDoList";

export class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: props.tasks
        }

        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    addTask(newTask){
        this.setState({tasks: [...this.state.tasks, newTask]});
    }

    removeTask(index){
        const leftTasks = this.state.tasks.filter((t,i) => {return i !== index;})
        this.setState({tasks: leftTasks});
    }

    toggleComplete(index){
        const updatedTasks;
    }

    render() {
        return (
            <div>
                <h1>TO DOs</h1>
                <ToDoEditor addTaskCallback={this.addTask}/>
                <ToDoList tasks={this.state.tasks} removeTaskCallback={this.removeTask}/>
            </div>
        );
    }
}
