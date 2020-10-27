// EVALUATION FUNCTIONS

let re;
re = /hello/;
re = /hello/i; // Case insensitive
// re = /hello/g; // Global search, search all instances of hello

console.log(re);
console.log(re.source);

// exec() - Return result in an array if there's match or null
const result1 = re.exec('brad hello world');
console.log(result1);
console.log(result1[0]);
console.log(result1.index);
console.log(result1.input);

// test() - Return true or false
const result2 = re.test('hello')
console.log(result2);

// match() - Return result array or null
const str1 = 'Hello there';
const result3 = str1.match(re);
console.log(result3);

// search() - Return index of the first match or -1
const str2 = 'Hello there';
const result4 = str2.search(re);
console.log(result4);

// replace() - Return new string with some or all matches of a pattern
const str3 = 'Hello there';
const result5 = str3.replace(re, 'Hi');
console.log(result5);


// METACHARACTER SYMBOLS

// Literal characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i; // Must begin with an h
re = /d$/i; // Must end with an d
re = /^hello$/i; // Must begin and end with an hello
re = /h.llo/i; // Wildcard but only for one char
re = /h*llo/i; // Wildcard for any amount of chars
re = /gre?a?y/i; // Matches with either e or a
re = /hello\?/i; // Escape character

// Brackets [] - Character Sets
re = /gr[ae]y/i; // Has to be one of the chars inside the bracket 
re = /[GF]ray/; // Has to be one of the chars inside the bracket 
re = /[^GF]ray/; // Match any chars except G or F - !true
re = /[A-Z]ray/; // Match chars from A to Z in uppercase
re = /[A-Za-z]ray/; // Match chars from A to Z in uppercase/lowercase
re = /[0-9]ray/; // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; // Must have two ls
re = /Hel{2,4}o/i; // Must have two to four ls
re = /Hel{2,}o/i; // Must have two or more ls

// Parentheses () - Grouping
re = /^([0-9]x){3}$/; // Must have exactly #x three times

// Shorthand Character Classes
re = /\w/; // Word character - letter, number or _
re = /\w+/; // One or more word character - letter, number or _
re = /\W/; // Non-word character - anything but letter, number or _
re = /\d/; // Match any digit
re = /\D/; // Match any non-digit
re = /\s/; // Match whitespace
re = /\S/; // Match any non-whitespace
re = /Hell\b/i; // Must match Hell, not Hello

// Assertions
re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/; // Match x only if NOT followed by y

// String to match
const str = 'Hello World';

// Log Results
const result = re.exec(str);
console.log(result);


function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`)
  } else {
    console.log(`${str} does NOT match ${re.source}`)
  }
}

reTest(re, str);