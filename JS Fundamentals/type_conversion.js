let val;

// Number to string
val = String(5);
val - String(4+4);

// Bool to string
val = String(true);

// Date to string
val = String(new Date());

// Array to string
val = String([1,2,3,4])

// toString()
val = (5).toString();
val = (true).toString();

// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');

val = parseInt('100.50');
val = parseFloat('100.50');

// Output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// console.log(val.toFixed(2));

const val1 = String(5);
const val2 = 6; // Type Cohersion. Automatically converted to string
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);