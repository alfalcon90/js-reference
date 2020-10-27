// For Loop - Use if index is needed

for (let i = 0; i <= 10; i++) {
  if (i == 2) {
    console.log('2 is my favorite number');
    continue;
  }

  if (i === 5) {
    console.log('Stop the loop');
    break;
  }

  console.log('Number ' + i);
}

// While Loop - Use when the number of iterations in not known in advance

let i = 0;

while (i < 10) {
  console.log('Number ' + i);
  i++;
}

// Do While Loop - Runs once no matter what

do {
  console.log('Number ' + i);
  i++;
} while (i < 10);

// forEach() - Passes function 'for each' element in the array

const cars = [ 'Ford', 'Chevy', 'Honda', 'Toyota' ];

cars.forEach(function(car) {
  // Each element inside the array becomes 'car'
  console.log(car);
});

cars.forEach(function(car, index) {
  // forEach() accepts a second param to be used as index of array
  console.log(car, index);
});

// Map() - Creates a new array with the results of the callback function

const numbers = [ 20, 21, 22, 23, 24, 25 ];

// Doubles every item and assigns to new array
const doubles = numbers.map(function(num) {
  return num * 2;
});

// Creates new object for each element in the array
const numEven = numbers.map(function(num) {
  return {
    value  : num,
    isEven : n % 2 === 0
  };
});

// For In Loop - Use on Objects

const user = {
  firstName : 'John',
  lastName  : 'Doe',
  age       : 40
};

for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}

// For Of Loop - Use on Arrays and Strings

const subreddits = [ 'soccer', 'popheads', 'cringe', 'books' ];

for (let x of subreddits) {
  console.log(x);
}
