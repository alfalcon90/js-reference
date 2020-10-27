// Create some arrays
const numbers = [ 43, 56, 33, 23, 44, 36, 5 ];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = [ 'Apple', 'Banana', 'Orange', 'Pear' ];
const mixed = [ 22, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date() ];

let val;

// Get array length
val = numbers.length;

// Check if is array
val = Array.isArray('hello');

// Get single value
val = numbers[3];
val = numbers[0];

// Insert into array
numbers[2] = 100;

// indexOf() - Finds index of value
val = numbers.indexOf(36);

// MUTATING ARRAYS

// push() - Adds on to the end
numbers.push(250);

// unshift() -  Adds on to the front
numbers.unshift(120);

// pop() - Take off from end
numbers.pop();

// shift() - Take off from front
numbers.shift();

// splice() - Removes, replaces, or adds new elements
const months = [ 'Jan', 'March', 'April', 'June' ];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

// reverse() - Reverses an array
numbers.reverse();

// concat() - Combines arrays
val = numbers.concat(numbers2);

// sort() - Sorts an array. Changes the order of the array.
const prices = [ 400.5, 3000, 99.99, 35.99, 12.0, 9500 ];
prices.sort(); // [12, 3000, 35.99...] Sorts using first number, no good

// Sorts in ascending order. Iterates through array by comparing pairs (a - b) -> (400.5 - 3000).
prices.sort((a, b) => a - b);

// Sorts in descending order.
prices.sort((a, b) => b - a);

// find() - Returns value of the first element it finds
let movies = [ 'The Fantastic Mr. Fox', 'Mr. and Mrs. Smith', 'Mrs. Doubtfire', 'Mr. Deeds' ];

// returns true for first item that matches. Useful for finding unique elements like IDs.
const movie = movies.find((movie) => {
  return movie.includes('Mrs');
});

// filter() - Creates new array with all elements that match test/query function
const nums = [ 34, 35, 36, 37, 38 ];
const odds = nums.filter((n) => n % 2 === 1); // Contains odd numbers

// every() - Returns true if all elements match test/query function
const words = [ 'dog', 'dig', 'log', 'bag', 'wag' ];
const threeChars = words.every((word) => word.length === 3); // All words are 3 chars long so it returns true

// some() - Returns true if any elements match test/query function
const someStartWithD = words.some((word) => word[0] === 'd'); // Some words start with 'd' so it returns true

// reduce() - Reduces all elements in array to one element. Assigns return of callback function to accumulator.
// Uses: Sum every element in an array to get total, find max value in an array, group items together.

const nums = [ 3, 5, 7, 9, 11 ];
const sum = nums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}); // This reduces array to 35

const max = nums.reduce((max, currentValue) => {
  if (currentValue > max) return currentValue; // Gets assigned to max.
  return max;
}); // This reduces array to 11

const nums = [ 3, 5, 7, 9, 11 ];
const sum = nums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 100); // You can specify initial value. This reduces array to 135

const votes = [ 'y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y' ];
const results = votes.reduce((tally, val) => {
  if (tally[val]) {
    tally[val]++;
  } else {
    tally[val] = 1;
  }
  // Can be rewritten with one line: tally[val] = (tally[val] || 0) + 1
  return tally;
}, {}); // Returns an object {y: 7, n: 6}

// Spread - Similar to concat() but more flexible. Useful for copying elements of array.

const nums1 = [ 1, 2, 3, 4 ];
const nums2 = [ 5, 6, 7, 8 ];

const spread = [ ...nums1, ...nums2 ]; // Combines content from both arrays into one
const spread = [ ...nums1, ...nums2, 9, 10 ]; // Combines arrays and adds new elements
