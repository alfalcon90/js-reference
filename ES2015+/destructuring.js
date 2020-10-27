// Destructuring - Unpack values from arrays or props from objects into distinct variables

// Arrays - Picks element based on index

const people = [ 'John', 'Beth', 'Mike', 'Tom', 'Jane' ];

// Old way of doing it
const gold = people[0];
const silver = people[1];
const bronze = people[2];

// New hotness
const [ gold, silver, bronze ] = people; // gold is set to [0], silver is set to [1], bronze is set to [2]
// Skip elements
const [ gold, , , silver, bronze ] = people; // gold is set to [0], silver is set to [3], bronze is set to [4]
// Use rest
const [ winner, ...others ] = people; // winner is set to [0], others is an array with the rest

// Objects - Picks property based on name

const person = {
  name   : 'John Doe',
  age    : 32,
  city   : 'Miami',
  gender : 'Male'
};

const { name, age } = person; // Creates new variables with values from 'name' and 'age' props

const { userName: name, userAge: age } = person; // Creates variable with different name based on 'name' prop

const { name, age, ...other } = person; // Collects the other props into 'other' variable

// Nesting

const results = [
  {
    first   : 'Eliud',
    last    : 'Kipchoge',
    country : 'Kenya'
  },
  {
    first   : 'Feyisa',
    last    : 'Lilesa',
    country : 'Ethiopia'
  },
  {
    first   : 'Galen',
    last    : 'Rupp',
    country : 'United States'
  }
];

const [ { first: goldWinner }, { country } ] = results; // Returns 'Eliud' as goldWinner and 'Ethopia' as country

// Functions - Used to extract values from specific props in an onject or element in array that was passed as parameter

function print({ first, last, title }) {
  console.log(`${first} ${last}, ${title}`);
}
print(person); // Extracts 'first', 'last', and 'title' from person object and logs it
