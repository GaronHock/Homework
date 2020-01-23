import {connect} from 'react-redux';
import { selectAllPokemon } from '../../reducers/selectors';
import { PokemonIndex } from './pokemon_index.jsx';
import {requestAllPokemon} from '../../actions/pokemon_actions';

const mapStateToProps = state =>({
    pokemon: selectAllPokemon(state) //this.props.pokemon /// gets array of all pokemon
})

const mapDispatchToProps = dispatch =>({
  requestAllPokemon: () => dispatch(requestAllPokemon()) //this.props.requestAllPokemon fire request to store 
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);