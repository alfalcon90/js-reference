// Why we need Async and Await

function getData() {
  const data = axios.get('https://swapi.dev/api/planets/');
  console.log(data); // data won't be ready by the time this executes
}

// How do we make this function asynchronous without using .then/.catch?
// Answer: Async and Await! Easy way to make a function that returns a promise.

// Add async in front of a function

async function greet() {
  return 'HELLO!'; // Returns a promise that was resolved with 'HELLO!'
}

// Throwing an error automatically rejects a promise

async function error() {
  throw 'There was an error';
}

// Using Await - pauses execution of a function while it waits for a promise to be resolved.

async function getPlanets() {
  // execution pauses until it's resolved
  const res = await axios.get('https://swapi.dev/api/planets/');
  // this runs afterward
  console.log(res.data);
}

// Error Handling

async function getPlanetas() {
  try {
    const res = await axios.get('https://swapi.dev/api/planetas/');
    console.log(res.data);
  } catch (e) {
    console.log('IN CATCH', e);
  }
}

// Sequential Requests

async function get3PokemonSeq() {
  const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
  const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
  const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
  console.log(poke1.data);
  console.log(poke2.data);
  console.log(poke3.data);
}

// Parallel Requests

async function get3PokemonPar() {
  const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
  const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
  const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
  const poke1 = await prom1;
  const poke2 = await prom2;
  const poke3 = await prom3;
  console.log(poke1.data);
  console.log(poke2.data);
  console.log(poke3.data);
}

// Using Promise.all for parallel requests

async function get3PokemonPar2() {
  const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
  const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
  const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
  const results = await Promise.all([ prom1, prom2, prom3 ]);
  console.log(results);
  for (let pokemon of results) {
    console.log(pokemon.data.name);
  }
}
