
const inherits = require("./utils.js");


function MovingObject(options){
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
}



MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
        this.pos[0],
        this.pos[1],
        this.radius,
        0,
        2 * Math.PI,
        false
    );

    ctx.fill();
};

MovingObject.prototype.move = function(){
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
}
 
MovingObject.prototype.makeSound = function(){
    console.log("hello")
}
module.exports = MovingObject;

// var canvas = document.getElementById('canvas');
// var c = canvas.getContext('2d');
// c.fillStyle = "red";
// c.fillRect(100, 100, 400, 300); 


// var canvas = document.getElementById('myCanvas');
// var context = canvas.getContext('2d');
// var centerX = canvas.width / 2;
// var centerY = canvas.height / 2;
// var radius = 70;

// context.beginPath();
// context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
// context.fillStyle = 'green';
// context.fill();
// context.lineWidth = 5;
// context.strokeStyle = '#003300';
// context.stroke();