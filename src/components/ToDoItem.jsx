import * as React from "react";

export class ToDoItem extends React.Component {
    render(){
        return (
            <div><input type="checkbox"/>&nbsp; {this.props.task.description}  <input type="button" onClick={this.props.removeTaskCallback}  value="Remove"/></div>
        );
    }
}