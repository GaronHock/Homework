import { PokemonIndex } from "./pokemon_index"
import React from 'react';
import { Link } from "react-router-dom";

export const PokemonIndexItem = ({pokemon}) =>{
  return (
    <li>
      <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name}<img src={pokemon.image_url}/></Link>
    </li>
  )
}
