import { combineReducers } from 'redux';
import entitiesReducer from './entities';
import sessionReducer from './session';

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer
});
//now we have a place to store all info about user