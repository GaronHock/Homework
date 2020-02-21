import{postUser, deleteSession, postSession} from '../utils/session'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

//action creators - return POJO with a type and some kind of payload


const receiveCurrentUser = (user) =>({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () =>({
  type: LOGOUT_CURRENT_USER
});


///create thunk action creators 

export const createNewUser = formUser => dispatch => postUser(formUser)  ///postUser ajax request that will return a promise
.then(user => dispatch(receiveCurrentUser(user))) // will return a user then dispatch action creator
//but invoking it and it will receive the user that we just got back from our ajax call

///we have not made the formUser yet 

//we get dispatch from our thunk middleware 


export const login = formUser => dispatch => postSession(formUser)
.then(user => dispatch(receiveCurrentUser(user)));


export const logout = () => dispatch => deleteSession()
.then(() => dispatch(logoutCurrentUser()));