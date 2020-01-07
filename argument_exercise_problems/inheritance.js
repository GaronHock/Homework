

function Ship(name) {
    this.name = name;
}




function MovingObject(name) {
    this.name = name;
}


MovingObject.prototype.spaceShipNoises = function(){
    console.log(`${this.name} goes vroom`)
}



//  function Surrogate(){}
//     Surrogate.prototype = MovingObject.prototype;
//     Ship.prototype = new Surrogate;
//     Ship.prototype.constructor = Ship;
//     Asteroid.prototype = new Surrogate;
//     Asteroid.prototype.constructor = Asteroid;

Function.prototype.inherits = function (movingObject) {
    function Surrogate () {};
    Surrogate.prototype = movingObject.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
};




Ship.inherits(MovingObject);



Ship.prototype.makeANoise = function () {
    console.log(`${this.name} goes bloop`)
}

function Asteroid(name) {
    this.name = name;
}

Asteroid.inherits(MovingObject);

spaceship = new MovingObject("flyer");
spaceship.spaceShipNoises();


newship = new Ship("hello");
newship.spaceShipNoises();
newship.makeANoise();



newAsteroid = new Asteroid("rock");
newAsteroid.spaceShipNoises();
