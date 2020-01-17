import {createStore} from 'redux';
import rootReducer from '../reducers/root_reducer';

const configureStore = (preLoadedState = {}) =>{
  const store = createStore(rootReducer, preLoadedState);
  return store;
}

export default configureStore;