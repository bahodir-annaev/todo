import * as React from "react";
import {constants} from "../constants";
import {Task} from "../models/Task";

export class ToDoEditor extends React.Component {
    constructor(props){
        super(props);
        this.state = new Task();

        this.handleAdd = this._handleAdd.bind(this);
        this.handleDescriptionChange = this._handleDescriptionChange.bind(this);
        this.handlePriorityChange = this._handlePriorityChange.bind(this);
    }

    _handleAdd(event){
        this.props.addTask({...this.state});
        event.preventDefault();
    }

    _handleDescriptionChange(event){
        this.setState({description: event.target.value});
    }

    _handlePriorityChange(event){
        this.setState({priority: parseInt(event.target.value)});
    }

    render(){
        return (
            <div>
                <h3>Add new todo</h3>
                <div>
                    <form onSubmit={this.handleAdd}>
                        <input type="text" value={this.state.description} onChange={this.handleDescriptionChange} placeholder="Enter description" />
                        <label htmlFor="task-priority"> Priority </label>
                        <select id="task-priority" value={this.state.priority} onChange={this.handlePriorityChange}>
                            <option value={constants.PRIORITY_LOW}>Low</option>
                            <option value={constants.PRIORITY_NORMAL}>Normal</option>
                            <option value={constants.PRIORITY_HIGH}>High</option>
                        </select>
                        <input type="submit" value="Add"/>
                    </form>
                </div>
            </div>
        )
    }
}