class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", "li", ( e => {
      const $square = $(e.currentTarget);
      this.makeMove($square);
    }));
  }

  makeMove($square) {
    const pos = $square.data("pos");
    const currentPlayer = this.game.currentPlayer;

    this.game.playMove(pos);
    $square.addClass(currentPlayer);

    if (this.game.isOver()) {
      const winner = this.game.winner();

      if (winner) {
        this.$el.append("<h1>").text(`WINNER IS ${winner}`);
      } else {
        this.$el.append("<h1>").text("DRAW")
      }
    }

  }

  setupBoard() {
    const $ul = $("<ul>");
   
    for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
      for (let colIndex = 0; colIndex < 3; colIndex++) {
        let $li = $("<li>");
        $li.data("pos", [rowIndex, colIndex]);

        $ul.append($li);  
      }
    }
    this.$el.append($ul);
  }
 
}

module.exports = View;
