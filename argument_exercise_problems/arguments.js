// function sum(...args) {
//   let result = 0;
//   for (let i = 0; i <= arguments.length; i++) {
//     result += i;
//   }
//   return result;
// };


// console.log(sum(1, 2, 3, 4));
// console.log(sum(1, 2, 3, 4, 5));





class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

Function.prototype.myBind = function (context) { /// context is this
    const bindArgs = Array.from(arguments).slice(1); // passing in additional arguments
    const that = this; //value of this doesnt change 
    return function(){
      const allArgs = bindArgs.concat(Array.from(arguments)); //combining arguments that were passed into my bind
      //as well as arguments passed in to the invoked function
      return that.apply(context, allArgs);
    };
};
const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true



function curriedSum(numArgs) {
    const numbers = [];
    function _curriedSum(number) {
        numbers.push(number);
        if (numbers.length === numArgs) {
            let solution = 0;
            for(i = 0; i < numbers.length; i++) {
                solution += numbers[i];
                }
            return solution;
        } else{
            return _curriedSum;
        };
    }
        return _curriedSum;
};
const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1)); // => 56

Function.prototype.curry(numArgs) = function (numArgs) {
    const args = [];
    const that = this;
    function _curriedFunction(arg) {
        args.push(arg);
        if (args.length === numArgs) {
            return that(...args);
        } else {
            return _curriedFunction;
        };
    }
    return _curriedFunction;
};


function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!
let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30
sumThree.curry(3)(4)(20)(6);

