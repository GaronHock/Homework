import React from 'react'

export class PokemonDetail extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
      const id = this.props.match.params.pokemonId
    
    this.props.requestOnePokemon(id);
  }

  componentDidUpdate(prevProps){
    if(this.props.match.params.pokemonId !== prevProps.match.params.pokemonId){
      this.props.requestOnePokemon(this.props.match.params.pokemonId);
    }
  }

  render(){
      if (this.props.pokemon && this.props.pokemon.moves){
        return <section className='pokedex'>
            <ul>{this.props.pokemon.moves}</ul>
            </section>
        }else{
            return <p>loading</p>
        }
  }
}


// render(){
//   const pokemonItems = this.props.pokemon.map(poke => (
//     <PokemonIndexItem key={poke.id} pokemon={poke} />
//   ));
//   return <section className="pokedex">
//     <ul>{pokemonItems}</ul>
//   </section>;
// }
// }