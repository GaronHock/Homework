// import { connect } from 'react-redux';
// import { selectAllPokemon } from '../../reducers/selectors';
// import { PokemonIndex } from './pokemon_index.jsx';
// import { requestAllPokemon } from '../../actions/pokemon_actions';

// const mapStateToProps = state => ({
//   pokemon: selectAllPokemon(state) //this.props.pokemon /// gets array of all pokemon
// })

// const mapDispatchToProps = dispatch => ({
//   requestAllPokemon: () => dispatch(requestAllPokemon()) //this.props.requestAllPokemon fire request to store 
// })

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(PokemonIndex);


// export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
// export const RECEIVE_ONE_POKEMON = 'RECEIVE_ONE_POKEMON'; //convention
// import * as APIUtils from '../util/api_utils';

// export const receiveAllPokemon = pokemon => ({
//   type: RECEIVE_ALL_POKEMON,
//   pokemon
// })

// export const receiveOnePokemon = poke => ({
//   type: RECEIVE_ONE_POKEMON,
//   poke      //sets up a key to be used  (poke: poke) but syntatic sugar
// })



// export const requestAllPokemon = () => (dispatch) => (
//   APIUtils.fetchAllPokemon()
//     .then(pokemon => {
//       dispatch(receiveAllPokemon(pokemon))
//     })
// )


// export const requestOnePokemon = (pokemonId) => (dispatch) => (
//   APIUtils.fetchOnePokemon(pokemonId).then(poke => { dispatch(receiveOnePokemon(poke)) })
// )



import {connect} from 'react-redux';
import {requestOnePokemon} from '../../actions/pokemon_actions';
import {PokemonDetail} from './pokemon_detail';

//gives us access to props the hash router is providing
const mapStateToProps = (state, ownProps) => ({
  pokemon: state.entities.pokemon[ownProps.match.params.pokemonId] ///.pokemon.1
})

const mapDispatchToProps = dispatch => ({
    requestOnePokemon: (id) => dispatch(requestOnePokemon(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);

