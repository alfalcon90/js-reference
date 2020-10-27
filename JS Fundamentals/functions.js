// Function Declarations

function greet(firstName = 'John', lastName = 'Doe') {
  // if ( typeof firstName == 'undefined') {firstName = 'John'} // ES5
  // if ( typeof lastName == 'undefined') {lastName = 'Doe'}
  return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet());

// Function Expressions

// Anonymous Function
const square = function(x) {
  return x * x;
};

// Named Function
const multiply = function product(x, y) {
  return x * y;
};

console.log(square(8));

// Immediately invocable function expressions - IIFEs

(function() {
  console.log('IIFE Ran..');
})();

(function(name) {
  console.log('Hello ' + name);
})('Brad');

// Property Methods - Function inside an object

const todo = {
  add  : function() {
    console.log('Add todo..');
  },
  edit : function(id) {
    console.log(`Edit todo ${id}`);
  }
};

todo.delete = function() {
  console.log('Delete todo..');
};

todo.add();
todo.edit(22);
todo.delete();

// Return Statement

function sum(x, y) {
  return x + y; // Only one value can be returned here. Ex: Array, string, num
  console.log('foo'); // This won't run
}

function isPurple(color) {
  if (color.toLowerCase() === 'purple') {
    return true; // Stops whole function
  }
  return false; // Doesn't run unless If Statement is false
}

function isPurple(color) {
  // Simpler way of writing func above
  return color.toLowerCase() === 'purple';
}

// Functions as Objects

function add(x, y) {
  return x + y;
}

substract = function(x, y) {
  return x - y;
};

function multiply(x, y) {
  return x * y;
}

divide = function(x, y) {
  return x - y;
};

const operations = [ add, substract, multiply, divide ];

for (let func of operations) {
  let result = func(30, 5);
  console.log(result); // Prints result for all 4 functions
}

const thing = {
  doSomething : multiply // Called with thing.doSomething()
};

// Functions as Arguments

function callFunction(func, num) {
  for (let i = 0; i < num; i++) {
    func();
  }
}

function cry() {
  console.log('BOO HOO');
}

callFunction(cry, 3); // Passes cry() as parameter

// Functions as Return values

function multiplyBy(num) {
  // Simpler than declaring a new function and returning
  return function(x) {
    return x * num; // Has access to num from parent function
  };
}

const triple = multiplyBy(3); // Constructs a new function(x)
triple(6); // 18
triple(2); // 6

const double = multiplyBy(2); // Constructs a new function(x)
double(6); // 12
double(2); // 4

function makeBetweenFunc(x, y) {
  return function(num) {
    return num >= x && num <= y;
  };
}

const isChild = makeBetweenFunc(0, 18);
isChild(5); // true
isChild(68); // false

// Callbacks - A function passed into another function as an argument, which is then invoked inside the outer function.

function grumpus() {
  alert('GO AWAY!');
}

// Use named function - rarely used
setTimeout(grumpus, 5000);

// Use anonymous function
setTimeout(function() {
  alert('WELCOME!');
}, 5000);

const btn = document.querySelector('button');
btn.addEventListener('click', function() {
  alert('WHY DID YOU CLICK ME?');
});

// Hoisting

console.log(animal); // undefined
// Var declaration is 'hoisted' up without value. Ex: var animal;
var animal = 'Tapir';

console.log(shrimp); // Init ERROR
// Let declaration is NOT 'hoisted' up. Same with consts.
let shrimp = 'Harlequin Shrimp';

howl(); // It works!
// Functions are 'hoisted' up
function howl() {
  console.log('AWOOOOOO');
}

hoot(); // ERROR
console.log(hoot); // undefined
// Vars are not 'hoisted' up.
var hoot = function() {
  console.log('HOOO HOOO');
};

// Arrow Functions

const greet = () => {
  console.log('Hi!');
};

const square = (x) => {
  return x * x;
};

// Parentheses can be taken off for one param. Prettier formatter adds it.
const isEven = (num) => {
  return num % 2 === 0;
};

const multiply = (x, y) => {
  return x * y;
};

// Implict return
const square = (n) => n * n;

// Default Parameters

// Assigns 1 as default vaue of y
function multiply(x, y = 1) {
  return x * y;
}

// Spread - Expanding some iterable into a function

const nums = [ 34, 35, 36, 37, 38 ];
Math.max(...nums); // Spreads array into separate args. Checks each element instead of the whole array.

// Argument Object - Old way of capturing all parameters. Kinda like an array but not really.

function sum() {
  console.log(arguments);
}
sum(1, 2, 3, 4); // Logs all parameters as an array-like.

// Rest Parameter - Collects all remaining arguments into an actual array

function sum(...nums) {
  return nums.reduce((total, currVal) => {
    return total + currVal;
  });
} // Collects all nums passed in and adds them up

function fullName(first, last, ...titles) {
  console.log(first, last, titles);
} // Logs remaining args as titles
