import React from 'react';

class SignUp extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      username: '',
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleInput(type){
    return (e) =>{
      this.setState({[type]: e.target.value })
      ///when i update username, email, etc.. the type will be username, email,etc
      //in order to make it key value we must wrap in brackets that way it will be evaluated 
      //before it is assigned to the key
    }
  }

    handleSubmit(e){
      e.preventDefault();
      this.props.createNewUser(this.state)
      .then(() => this.props.history.push('/chirps')) ///if weve succesfully created 
      //a newUser we want to use a callback function that will successfully redirect us 
      //we dont have access to hitory yet but we will because we are going to wrap this 
      //while component in a route 
    }
  render(){
    return (
    <div className='session-form'>
      <h2>Sign Up</h2>
      <form>
        <label>Username:
          <input
           type='text'
           value={this.state.username} //relies on our state 
           onChange={this.handleInput('username')} //everytime we type will call function that 
           //is returned by our handle input type which is arrow function 
           //that will set the state to target value of this input field
          />
        </label>
          <label>Email:
          <input
              type='text'
              value={this.state.email} //relies on our email slice of state
              onChange={this.handleInput('email')} //everytime we type will call function that 
            //is returned by our handle input type which is arrow function 
            //that will set the state to target value of this input field
            />
          </label>
          <label>password:
          <input
              type='password'
              value={this.state.password} //relies on our state 
              onChange={this.handleInput('password')} //everytime we type will call function that 
            //is returned by our handle input type which is arrow function 
            //that will set the state to target value of this input field
            />
          </label>
          <button onClick={this.handleSubmit}>SignUp</button>
      </form>
    </div>
    );
  }
};


export default SignUp;

//want to create a local state to keep track of all fields of our forms that we are building 