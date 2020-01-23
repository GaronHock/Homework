export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_ONE_POKEMON = 'RECEIVE_ONE_POKEMON'; //convention
import * as APIUtils from '../util/api_utils';

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
})

export const receiveOnePokemon = poke => ({
  type: RECEIVE_ONE_POKEMON,
  poke      //sets up a key to be used  (poke: poke) but syntatic sugar
})



export const requestAllPokemon = () => (dispatch) => (
  APIUtils.fetchAllPokemon()
    .then(pokemon => {
      dispatch(receiveAllPokemon(pokemon))})
)


export const requestOnePokemon = (pokemonId) => (dispatch) =>(
  APIUtils.fetchOnePokemon(pokemonId).then(poke =>{dispatch(receiveOnePokemon(poke))})
)



