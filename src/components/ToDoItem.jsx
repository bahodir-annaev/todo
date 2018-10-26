import * as React from "react";

export class ToDoItem extends React.Component {
    render(){
        return (
            <div>
                <input type="checkbox" onClick={this.props.toggleComplete}/>&nbsp;
                <span className={this.props.task.complete ? "complete": ""}> {this.props.task.description}</span>&nbsp;
                <input type="button" onClick={this.props.removeTask}  value="Remove"/>
            </div>
        );
    }
}