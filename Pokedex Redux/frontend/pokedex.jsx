import React from 'react';
import ReactDOM from 'react-dom';
import {receiveAllPokemon} from './actions/pokemon_actions.js'
import {fetchAllPokemon} from './util/api_utils.js' //if it isn't export default you have to destructure
import {configureStore} from './store/store';
import {requestAllPokemon} from './actions/pokemon_actions.js';
import {selectAllPokemon} from './reducers/selectors';
import Root from './components/root';
import { HashRouter, Route } from "react-router-dom";

window.selectAllPokemon = selectAllPokemon;
window.receiveAllPokemon = receiveAllPokemon;
window.fetchAllPokemon = fetchAllPokemon;
window.requestAllPokemon = requestAllPokemon;
document.addEventListener("DOMContentLoaded", ()=>{
  const root = document.getElementById('root');
  const store = configureStore();
  
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={store}/>, root);
});