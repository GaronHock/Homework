const View = require("./ttt-view.js");// require appropriate file
const Game = require("../tic-tac/game.js"); // require appropriate file

  $(() => {
    const ele = $(".ttt");
    const game = new Game();
    const gameView = new View(game, ele);        
  });
