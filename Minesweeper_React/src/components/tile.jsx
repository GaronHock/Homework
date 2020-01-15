import React from 'react';
class Tile extends React.Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event){
    this.props.updateGame(event.altKey, this.props.tile);
  }
  render(){
    
    let content = "Hello"
    let number = 0;
    const tile = this.props.tile;
    if (tile.explored){
      if(tile.bombed){
        content = "bomb"
      }else{
        number = tile.adjacentBombCount();
        if(number > 0){
          content = number
        }else{
          content = "";
        } 
      }
    }else if(tile.flagged){
      content = 'flagged'
    }
    
    return <div className="tile" onClick={this.handleClick}>{content}</div>
  }
}

export default Tile;