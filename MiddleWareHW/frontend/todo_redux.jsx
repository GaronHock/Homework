import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
    let store = configureStore(preloadedState);
  window.store = store;
  // store.dispatch = addLoggingToDispatch(store);
  store = applyMiddlewares(store, addLoggingToDispatch);
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
const addLoggingToDispatch = store => next => action =>{
    console.log(store.getState());
   console.log(action);
    next(action);
   console.log(store.getState());
   

}


