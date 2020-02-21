import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => { //in our arguments we are destructing
  //currentUser and logout which we are getting from our container
///this const display is being displayed below in the div
    //has two buttons we only want to show them if theyre not logged in
  
  const display = currentUser ? (
      <div>
        <h2>Hello, {currentUser.username}</h2>
        <button onClick={logout}>Log Out</button>
      </div>

  ):( 

    
    <div>
      <Link className="btn" to="/signup">Sign Up</Link>   
      <Link className="btn" to="/login">Log In</Link>
    </div>
  );

  

  return (
    <header className="nav-bar">
      <h1 className="logo">BLUEBIRD</h1>
      <div>
        {display}
      </div>
    </header>
  );
};
