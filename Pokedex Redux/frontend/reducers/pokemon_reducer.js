import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import {RECEIVE_ONE_POKEMON} from '../actions/pokemon_actions';

export const pokemonReducer = (state= {}, action) =>{
    Object.freeze(state);
    switch(action.type){
      case RECEIVE_ALL_POKEMON:
        return action.pokemon; 
      case RECEIVE_ONE_POKEMON:
        const onePokemon = action.poke.pokemon; //gets single pokemon
        return Object.assign({}, state, {[onePokemon.id]: onePokemon}); //merges into the state
      default:
        return state;
    }
}