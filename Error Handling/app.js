const user = {email: 'jdoe@email.com'};

try {
  // Produce a ReferenceError
  // myFunction();

  // Produce a TypeError
  // null.myFunction();

  // Product a SyntaxError
  // eval('Hello World')

  // Produce URIError
  // decodeURIComponent('%');

  if (!user.name) {
    // throw 'User has no name';
    throw new SyntaxError('User has no name');
  }
} catch(err) {
  console.log(err);
  console.log(err.message);
  console.log(err.name);
  console.log(err instanceof ReferenceError)
} finally {
  console.log('Finally runs regardless of result...')
}

console.log('Program continues...');