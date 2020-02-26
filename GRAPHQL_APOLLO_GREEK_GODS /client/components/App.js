import React from "react";
import { Route, Switch } from "react-router-dom";
import GodsList from "./gods/GodsList";
import Create from "./create/Create";
import Nav from "./nav/Nav";
import GodDetail from "./detail/GodDetail";

const App = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/gods/:id" component={GodDetail} />
        <Route exact path="/new" component={Create} />
        <Route path="/" component={GodsList} />
      </Switch>
    </div>
  );
};

export default App;
