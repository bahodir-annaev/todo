import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";

const tasks = [
    {description: "Learn React", complete: false, priority: 1},
    {description: "Learn TypeScript", complete: false, priority: 1}
];

ReactDOM.render(<App tasks = {tasks}/>, document.getElementById("root"));