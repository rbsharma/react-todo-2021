import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Todos from "./todos";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" children={<Todos />} />
        </Switch>
      </Router>
    </div>
  );
}
