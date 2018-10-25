import * as React from "react";

export class ToDoEditor extends React.Component {
    constructor(props){
        super(props);
        this.description = React.createRef();
        this.priority = React.createRef();

        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(){
        this.props.addTaskCallback({
            description: this.description.current.value, 
            priority: parseInt(this.priority.current.value),
            completed: false
        });
    }

    render(){
        return (
            <div>
                <h3>Add new todo</h3>
                <div>
                    <input type="text" ref={this.description} placeholder="Enter description"/>
                    <label htmlFor="task-priority"> Priority </label>
                    <select id="task-priority" defaultValue="1" ref={this.priority}>
                        <option value={0}>Low</option>
                        <option value={1}>Normal</option>
                        <option value={2}>High</option>
                    </select>
                    <input type="button" value="Add" onClick={this.handleAdd}/>
                </div>
            </div>
        )
    }
}