import { RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';

export const itemsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ONE_POKEMON:
            const pokemonItems = action.poke.items; //gets single pokemon
            return Object.assign({}, state, pokemonItems); //merges into the state
        default:
            return state;
    }
}