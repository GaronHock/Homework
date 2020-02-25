import React from "react";
import { Route, Switch } from "react-router-dom";
import DogIndex from "./dogs/DogIndex";
import ToyIndex from './toys/ToyIndex'
const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={DogIndex} />
      <Route path="/toyIndex" component={ToyIndex} />
    </Switch>
  </div>
);

export default App;
