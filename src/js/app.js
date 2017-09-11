import React from "react";
import { render } from "react-dom";

const App = () => (
    <div className="app">
        <div className="landing">
            <h1>Bash's Netflix Lounge</h1>
            <input type="text" placeholder="Search Movie" />
            <a>or Browse All</a>
        </div>
    </div>
);

render(<App />, document.getElementById("app"));