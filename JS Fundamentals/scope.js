// GLOBAL SCOPE

var a = 1; // NOT Block-level scoped
let b = 2; // Block-level scoped
const c = 3; // Block-level scoped

function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('Function Scope', a, b, c);
}

test();

// BLOCK SCOPE

if (true) {
  var a = 4; // DANGER: Accessible outside this scope
  let b = 5;
  const c = 6;
  console.log('If Scope:', a, b, c);
}

for (var a = 0; a < 10; a++) {
  console.log(`Loop: ${a}`);
}

console.log('Global Scope:', a, b, c);

// LEXICAL SCOPE

function outer() {
  let movie = 'Amadeus'; // Accessible by inner()

  function inner() {
    let movie = 'The Shinning'; // Accessible by extraInner()

    function extraInner() {
      let rating = 5; // Not accessible by parents
      console.log(movie.toUpperCase()); // Looks to the nearest scope for variable
    }
    extraInner();
  }
  inner();
}
