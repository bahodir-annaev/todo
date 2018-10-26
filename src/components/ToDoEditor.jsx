import * as React from "react";

const PRIORITY_LOW = 0;
const PRIORITY_NORMAL = 1;
const PRIORITY_HIGH = 2;

function Task(){
    this.description = "";
    this.priority = PRIORITY_NORMAL;
    this.complete = false;
}


export class ToDoEditor extends React.Component {
    constructor(props){
        super(props);
        this.state = new Task();

        this.handleAdd = this._handleAdd.bind(this);
        this.handleDescriptionChange = this._handleDescriptionChange.bind(this);
        this.handlePriorityChange = this._handlePriorityChange.bind(this);
    }

    _handleAdd(){
        this.props.addTask(this.state);
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
                    <input type="text" value={this.state.description} onChange={this.handleDescriptionChange} placeholder="Enter description"/>
                    <label htmlFor="task-priority"> Priority </label>
                    <select id="task-priority" value={this.state.priority} onChange={this.handlePriorityChange}>
                        <option value={PRIORITY_LOW}>Low</option>
                        <option value={PRIORITY_NORMAL}>Normal</option>
                        <option value={PRIORITY_HIGH}>High</option>
                    </select>
                    <input type="button" value="Add" onClick={this.handleAdd}/>
                </div>
            </div>
        )
    }
}