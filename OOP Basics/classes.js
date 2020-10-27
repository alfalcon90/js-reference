class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  static addNumbers(x, y) {
    return x + y;
  }
}

const mary = new Person('Mary', 'Williams', '11-13-1980');

console.log(mary);
mary.getsMarried('Thompson');
console.log(mary.greeting());
console.log(mary.calculateAge());

// console.log(mary.addNumbers(1, 1)); <-- This doesn't work with static methods

console.log(Person.addNumbers(1, 1)); // This DOES work

// Inheritance / Subclasses

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    // References the class that we're extending from
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');

console.log(john);
console.log(john.greeting());
console.log(Customer.getMembershipCost());
