import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";
import { Task } from "./models/Task";

const tasks = [
    new Task({description: "Learn React"}),
    new Task({description: "Learn TypeScript"})
];

ReactDOM.render(<App tasks = {tasks}/>, document.getElementById("root"));