import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container'
import { HashRouter, Route } from "react-router-dom";
const Root = ( {store} ) => (
  <Provider store={store}>
  <div> 
    <HashRouter>
      <Route path='/' component = {PokemonIndexContainer} />
    </HashRouter>
    Gotta catch em all!
    </div>
  </Provider>
);

export default Root;