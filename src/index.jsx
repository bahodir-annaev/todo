import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";

let tasks = [
    {description: "Learn React", completed: false, priority: 1},
    {description: "Learn TypeScript", completed: false, priority: 1}
];

ReactDOM.render(<App tasks = {tasks}/>, document.getElementById("root"));