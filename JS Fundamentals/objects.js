// Objects

const person = {
  firstName : 'Steve',
  lastName  : 'Smith',
  age       : 30,
  email     : 'steve@aol.com',
  hobbies   : [ 'music', 'sports' ],
  address   : {
    city  : 'Miami',
    state : 'FL'
  }
};

// Methods

const math = {
  add      : function(x, y) {
    return x + y;
  },
  multiply : function(x, y) {
    return x * y;
  }
};

math.add(2, 5);
math.multiply(3, 2);

// Method Shorthand

const auth = {
  username : 'TommyBot',
  login() {
    console.log('LOGGED YOU IN');
  },
  logout() {
    console.log('GOODBYE');
  }
};

// Keyword 'this' - Reference to the current execution scope

function sayHi() {
  console.log(this); // Logs the 'window' object in browsers.
}

const person = {
  first    : 'Cherilyn',
  last     : 'Sarkisian',
  nickName : 'Cher',
  fullName() {
    console.log(this); // Logs the 'person' object
  }
};

const person = {
  first    : 'Cherilyn',
  last     : 'Sarkisian',
  nickName : 'Cher',
  fullName() {
    console.log(`${this.first} ${this.last} AKA ${this.nickName}`); // Repeating 'this' every time gets cumbersome
    // Alternative
    const { first, last, nickName } = this; // You can now use these props as variables inside this method
    return `${first} ${last} AKA ${nickName}`; // This is much better
  },
  printBio() {
    fullName(); // This won't work
    this.fullName(); // This will
    const fullName = this.fullName();
    console.log(`${fullName} is a person`);
  }
};

// Get specific value from object

let val;
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.getBirthYear();

// Spread

const feline = {
  legs   : 4,
  family : 'Felidae'
};

const canine = {
  family : 'Caninae',
  furry  : true
};

const dog = {
  ...canine,
  isPet    : true,
  adorable : true
};

// Shorthand Properties - Automatically creates key and value from variable

// The old way
const getStats = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, r) => sum + r);
  const avg = sum / arr.length;
  return {
    max : max,
    min : min,
    sum : sum,
    avg : avg
  };
};

// The new hotness
const getStats = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, r) => sum + r);
  const avg = sum / arr.length;
  // Using the new shorthand property syntax:
  return {
    max,
    min,
    sum,
    avg
  };
};

// Computed Properties - Dynamic value for keys

const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'James Cameron';

// The old way:
const team = {};
team[role] = person;
team[role2] = person2;

// The new hotness
const team = {
  [role]      : person,
  [role2]     : person2,
  [1 + 6 + 9]: 'sixteen'
};

// Take in object and add prop
function addProp(obj, k, v) {
  return { ...obj, [k]: v };
}
