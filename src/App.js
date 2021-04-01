import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Todos from "./todos";
import Todo from "./todo";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" children={<Todos />} />
          <Route path="/todo/:id" children={<Todo />} />
        </Switch>
      </Router>
    </div>
  );
}
