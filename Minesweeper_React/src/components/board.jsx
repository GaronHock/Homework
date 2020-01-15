import React from 'react';
import Tile from './tile.jsx'
class Board extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    let tiles = this.props.board.grid
    return tiles.map((rows,rowIdx) =>{
     return <div key={rowIdx}>
        {rows.map ((tile,tileIdx) =>{
       return <Tile tile={tile} updateGame ={this.props.updateGame} key={tileIdx} />
        })
      }
      </div>
    })
  }
}
export default Board;