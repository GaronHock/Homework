//well build custom components that will make it so we can automate the process of allowing people
//to see certain components when they have the privilege


import React from 'react';
import {connect} from 'react-redux';
import {Redirect,Route,withRouter} from 'react-router-dom';  //redirect users to different views whtether they have right privilege
//route becuase these are route specific, will give different components access to match, location,history,props

//need to get diff props that all these will rely on 
//nee to see if user is loggedd in

const mapStateToProps = state =>({
  loggedIn: Boolean(state.session.currentUser) // will equate to true or false depending on wheter or not we have a current user
 
});

    //going to use for auth routes and protected routes

    //<AuthRoute path="" component={} />
    //will want to render component later so we want to make it capitalized
 
 
 
 
 
    ///will want to take in component, path we 
//are looking for and loggedIn as arguments
const Auth = ({loggedIn,path,component: Component}) =>(
  <Route  
      path={path}//path will equal path that we passed in
      render={props =>(
        loggedIn ? <Redirect to="/" />: <Component {...props} /> 
    )}                         
  />
);   



//want to render one thing if we are logged in the root directory
//if not logged in
 //render function takes in arrow function we will turn it into a react component
 //want to be able to pass in any props as well

 //need to connect auth route to mapStateToProps
 //if user is logged in wont b e able to see component if they are logged out they will



 const Protected = ({loggedIn, path, component:Component}) =>(
   <Route
    path={path}
    render={props =>(
      loggedIn ? <Component {...props}/> : <Redirect to="/signup"/>
    )}
  />
 );

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));




