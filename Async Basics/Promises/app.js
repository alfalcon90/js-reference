// Promises - JS Object that represents the eventual completion or failure of an async operation

const makeDogPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand < 0.5) {
        resolve();
      } else {
        reject();
      }
    }, 5000);
  });
};

// Promise is pending/unfulfilled until is rejected or resolved

makeDogPromise()
  // If Promise is resolved
  .then(() => {
    console.log('YAY WE GOT YOU A DOG!!');
  })
  // If Promise is rejected
  .catch(() => {
    console.log(':( NO DOG');
  });

// Passing values - Mock HTTP Request

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand < 0.75) {
        const pages = {
          '/users' : [ { id: 1, username: 'Bilbo' }, { id: 2, username: 'Esmeralda' } ],
          '/about' : 'This is the about page!',
        };
        const data = pages[url];
        resolve({ status: 200, data });
      } else {
        reject({ status: 404 });
      }
    }, 3000);
  });
};

fakeRequest('/about')
  // If Promise is resolved
  .then((res) => {
    console.log('Status Code:', res.status);
    console.log('Data:', res.data);
    console.log('REQUEST WORKED');
  })
  // If Promise is rejected
  .catch((res) => {
    console.log(res.status);
    console.log('REQUEST FAILED');
  });
