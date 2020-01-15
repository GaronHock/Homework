import * as Minesweeper from '../minesweeper.js'///import everything as minesweeper
import React from 'react';
import Board from './board.jsx';

class Game extends React.Component{
  constructor(props){
    super(props);
    this.state = {board: new Minesweeper.Board(10, 10)}
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(altkey,tile){
    if(altkey === true){
      tile.toggleFlag();
    }else{
      tile.explore();
    }
    this.setState({board:this.state.board});
  }
  render(){
    debugger;
      return <div>

        <Board board={this.state.board} updateGame={this.updateGame}/>
      </div>
    }
}

export default Game;
