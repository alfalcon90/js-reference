// Old way of doing it
const sayHello = function() {
  console.log('Hello');
};

// Arrow function
const sayHello = () => {
  console.log('Hello');
};

// One line function does not need braces
const sayHello = () => console.log('Hello');
sayHello();

// Return value
const sayHello = () => 'Hello';
console.log(sayHello());

const sayHello = () => {
  msg: 'Hello';
}; // Won't work like this
const sayHello = () => ({ msg: 'Hello' }); // This will work

// Parameters
const sayHello = (name) => console.log(`Hello ${name}`);
const sayHello = (name) => console.log(`Hello ${name}`); // Single param does not need parentheses
const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`); // Multiple params

sayHello('Brad');

// Use as callback
const users = [ 'Nathan', 'John', 'William' ];

const nameLength = users.map(function(name) {
  return name.length;
});

// Shorter
const nameLength = users.map((name) => {
  return name.length;
});

// Shortest
const nameLength = users.map((name) => name.length);

console.log(nameLength);
