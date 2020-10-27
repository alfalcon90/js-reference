// Prototypes - Blueprint of an object

// You can add to existing prototypes

String.prototype.yell = function() {
  return `${this.toUpperCase()}!!!!`;
};

// You can modify existing prototypes

Array.prototype.pop = function() {
  return 'POP POP POP!';
};

// Creating new prototypes

// Person constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
}

// Calculate age
Person.prototype.calculateAge = function() {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// Get full name
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

// Gets married
Person.prototype.getsMarried = function(newLastName) {
  this.lastName = newLastName;
};

const john = new Person('John', 'Doe', '8-4-90');
const mary = new Person('Mary', 'Johnson', '10-09-91');

console.log(mary);
console.log(john.calculateAge());
console.log(mary.getFullName());
mary.getsMarried('Smith');
console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('address'));

// Prototype Inheritance

// Person greeting
Person.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}`;
};

console.log(john.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');
console.log(customer1);

// Customer greeting
Customer.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
};

console.log(customer1.greeting());

// Object.create

const personPrototypes = {
  greeting    : function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried : function(newLastName) {
    this.lastName = newLastName;
  },
};

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

console.log(mary);
mary.getsMarried('Thompson');
console.log(mary.greeting());

const brad = Object.create(personPrototypes, {
  firstName : { value: 'Brad' },
  lastName  : { value: 'Traversy' },
  age       : { value: 36 },
});

console.log(brad);
console.log(brad.greeting());
