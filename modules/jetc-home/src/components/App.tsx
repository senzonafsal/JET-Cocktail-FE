import * as React from "react";
import "./../assets/scss/App.scss";

const reactLogo = require("../assets/img/jet_logo.png");

const App = () => (
    <div className="app">
       <img src={reactLogo.default} width="50%"/>
        <h1>Home Page</h1>
        <p>TBD</p>
    </div>
);

export default App;
