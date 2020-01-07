const Asteroid = require("./asteroid.js")

DIM_X = 0;
DIM_Y = 0;
NUM_ASTEROIDS = 10;

function Game() {

    this.dim_x = DIM_X;
    this.dim_y = DIM_Y;
    this.num_asteroids = NUM_ASTEROIDS;
    this.asteroids = [];

}

Game.prototype.addAsteroids = function(){
    for (let i = 0; i < this.num_asteroids; i++)
        this.asteroids.push(new Asteroid({ pos: this.randomPosition() }))
}

Game.prototype.randomPosition = function() {
    return [Math.floor(Math.random() * 800), Math.floor(Math.random() * 600)];
}

window.Game = Game;
module.exports = Game;


