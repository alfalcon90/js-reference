// Person constructor
function Person(name, age, dob) {
  this.name = name;
  this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

const brad = new Person('Brad', 36, '9-10-1981');
const john = new Person('John', 30);

console.log(brad.calculateAge());
console.log(this);

// STR
const name1 = 'Jeff'; // Primitive value of string
const name2 = new String('Jeff'); // Object. name2 != 'Jeff'

name2.foo = 'bar'; // Possible to add props

// NUM
const num1 = 5;
const num2 = new Number(5);

// BOOL
const bool1 = true;
const bool2 = new Boolean(true);

// FUNC
const getSum1 = function(x, y) {
  return x + y;
};

const getSum2 = new Function('x', 'y', 'return x + y');

// OBJ
const john1 = {name: 'John'};
const john2 = new Object({name: 'John'});

// ARR
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');




