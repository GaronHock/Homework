import {connect} from 'react-redux';
import {createNewUser} from '../../actions/session'
import SignUp from './signup';

//doesnt need to rely on any part of our state we just wanna pass down 
//the action that it will need to sign up a user 

const mapDispatchToProps = (dispatch) =>{
  return{
   createNewUser: formUser => dispatch(createNewUser(formUser))
  }

  //this is a key of createNewUser which is pointing to a value that is an anonymous function
  //that invokes dispatch of createNewUser 
  //store has dispatch function
}
//will return POJO with create nuew user will take in form user want to dispatch function
//create new user that takes form user from our form with 
//this object we can export our connected function

export default connect(null, mapDispatchToProps)(SignUp)
//pass in null because we dont need to rely on any parts of our state
//now we have function create nuew user in our props inside of our signup
//now in signup we can call this.props.createNewUser pass it a json object 
//and it will create a new user for us 
