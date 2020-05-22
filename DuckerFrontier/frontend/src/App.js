import React from 'react';
import logo from './logo.svg';
import { Route } from "react-router-dom";
import './App.css';
import Main from "./components/main";
import SpecificIndicator from "./components/SpecificIndicator";
import { Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/info/:id" component={SpecificIndicator}/>
          <Route />
        </Switch>
      </header>
    </div>
  );
}

export default App;
