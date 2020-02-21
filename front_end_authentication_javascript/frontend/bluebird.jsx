import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preloadedState = undefined; ///this is to make sure that we have a variable that we can use
  if (window.currentUser) { //inside of application.html
    //if we set currentUser to a valid javascript object
    //then we want that javascript object to become the currentUser
    //in our preloaded state
    preloadedState = { //preloaded state looks very close to the state that we have
      //we have a session that would be our sessionReducer
      session: {
        //inside of our sessionReducer we have a currentUser
        //which keeps track of the currentUser
        //because our preloaded State mimics the current state
        //it is getting passed in instead of our null Session
        //in our session reducer
        currentUser: window.currentUser
      }
    };
  }
  const store = createStore(preloadedState);
  // const store = createStore();

  ReactDOM.render(<Root store={store} />, root);
})