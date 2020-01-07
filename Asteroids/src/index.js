console.log("Webpack is working!")

const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");


const util = require("./utils.js");


const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 25,
    color: "#00FF00"
});

const myAsteroid = new Asteroid({
    pos: [30, 30],
    vel: [10, 10],
    radius: 25,
    color: "#00FF00"
})

window.MovingObject = MovingObject;
window.mo = mo;
//window.myAsteroid = myAsteroid;
document.addEventListener("DOMContentLoaded", function(){
    var canvas = document.getElementById('canvas');
    console.log(mo); 
    var ctx = canvas.getContext('2d');
    window.ctx = ctx;
    ctx.fillStyle = "green";
    const game = new Game;
    game.addAsteroids;


    // for (let i = 0; i<game.asteroids.length; i++){
    //     game.asteroids[i].draw(ctx);
    // }
    // run(ctx);
    
});

// function run(ctx){
//     ctx.clearRect(0, 0, 800, 600);
//     mo.move();
//     mo.draw(ctx);
//     setTimeout(run.bind(this, ctx), 100);
// }





