import React from 'react';
import {PokemonIndexItem} from './pokemon_index_item';
import {Route} from 'react-router-dom';
import PokemonDetail from './pokemon_detail_container';
export class PokemonIndex extends React.Component{
  
  constructor(props){
    super(props);
    //this.pokemonItems = this.pokemonItems.bind(this);
    }

    componentDidMount() {
        this.props.requestAllPokemon()
      }
    render(){
      const pokemonItems = this.props.pokemon.map(poke => (
        <PokemonIndexItem key={poke.id} pokemon={poke} />
      ));
      return <section className="pokedex">
        <ul>{pokemonItems}</ul>
        <Route path="/pokemon/:pokemonId"  component={PokemonDetail}/>
      </section>;
    }
}

  