// Common JS Module Syntax
// const person = require('./mymodule1');

// ES2015 Module
import { person, sayHello } from './mymodule2'; // Import items from module
import * as mod from './mymodule2'; // Import everything as mod
import greeting from './mymodule2'; // Import default

console.log(person.name);
console.log(sayHello());

console.log(mod.person.name);
console.log(mod.sayHello());

console.log(greeting);