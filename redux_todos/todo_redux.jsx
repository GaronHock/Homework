import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './frontend/store/store.js'
import App from './frontend/components/app'
import Root from './frontend/components/root'
import allTodos from './frontend/reducers/selectors'


document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;

  const root = document.getElementById("root");
  ReactDOM.render(
    <Root store={store}/>
    , root);
});

