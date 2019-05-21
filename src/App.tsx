import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Home } from "./components/home/home";
import { Resources } from "./components/resources/resources";
import { Gallery } from "./components/gallery/gallery";
import { Simulator } from "./components/simulator/simulator";

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/resources" component={Resources} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/simulator" render={() => <Simulator columns={92} rows={75} />} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
