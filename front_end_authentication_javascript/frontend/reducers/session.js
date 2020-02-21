import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session';

//create default state want session reducer to keep track of current user 

const _nullSession = {
  current_user: null,
}
//POJO want this to return if we dont have a current user 

export default(state = _nullSession, action) => {
  Object.freeze(state); // dont accidentally mutate our state 
  switch (action.type){
    case RECEIVE_CURRENT_USER:
    return Object.assign({}, {currentUser: action.user})//object that has current user as key
    // and will get action.user as an object
    //we dont have to worry about what state was before ,once we get a current user object 
    //that should be current user dont have to worry about old current user 
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }
}

//now we need to go into root reducer and add in session reducer at root level