import React from 'react';
import {Redirect, Link} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleInput(type) {
    return (e) => {
      e.preventDefault();
      let input = e.target.value
      this.setState({[type]: input});
    }
  }


 
  
  render () {

    const otherForm = this.props.formType === 'login' ? 'signup' : 'login'

    const errorsList = <ul>
      {this.props.errors.map(error => <li>{error}</li>)}
    </ul>
    
    return (
      <div>
        <h1>{this.props.formType}</h1>
        <br/>
        <p><Link to={`/${otherForm}`}>{otherForm}</Link></p>
        <h3>{errorsList}</h3>
        <form >
          <label>Username:
            <input 
              type="text" 
              value={this.state.username} 
              onChange={this.handleInput('username')} />
          </label>
          <label>Password:
            <input 
              type="password" 
              value={this.state.password} 
              onChange={this.handleInput('password')} />
          </label>
          <button onClick={this.handleSubmit}>{this.props.formType}</button>
        </form>
      </div>
    )
  }
}

export default SessionForm;