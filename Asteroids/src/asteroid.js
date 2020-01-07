const util = require("./utils.js");
const MovingObject = require("./moving_object.js");

function Asteroid(options){
    options.color = "green";
    options.radius = 25;
    options.vel = util.randomVec(2);
    MovingObject.call(this, options);
}
window.Asteroid = Asteroid;


util.inherit(MovingObject,Asteroid)

module.exports = Asteroid;





