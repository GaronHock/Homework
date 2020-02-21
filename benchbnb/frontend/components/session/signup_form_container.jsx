import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  loggedIn: state.session.id,
  formType: 'signup'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(signup(user)),
});


// handleSubmit(e){
//   e.preventDefault();
//   this.props.createNewUser(this.state)
//     .then(() => this.props.history.push('/chirps')) ///if weve succesfully created 
  //a newUser we want to use a callback function that will successfully redirect us 
  //we dont have access to hitory yet but we will because we are going to wrap this 
  //while component in a route 


// const mapStateToProps = (state, ownProps) => ({
//   pokemon: state.entities.pokemon[ownProps.match.params.pokemonId] ///.pokemon.1


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);