import React from "react";
import { Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/home";
import { Resources } from "./components/resources";
import { Gallery } from "./components/gallery";
import { Simulator } from "./components/simulator";

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/resources" component={Resources} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/simulator" component={Simulator} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
