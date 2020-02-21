import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';

// Comment this back in after you have built the login functionality

import { logout } from '../../actions/session';
//the above will allow us to create a button which will let
//the user logout
const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

//in the above we are making sure to pass down our currentUser from our state
//to our navBar component

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

//in the above we pass down our logout action to our commponent as well


// Comment this out when you have built the login functionality
// const mapStateToProps = null;
// const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
