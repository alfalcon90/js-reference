// Better than Fetch.
// Parses JSON automatically and returns object.
// Don't have to look for request errors.

axios
  .get('https://swapi.dev/api/planets/')
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });

// Chaining requests

axios
  .get('https://swapi.dev/api/planets/')
  .then(({ data }) => {
    console.log(data);
    for (let planet of data.results) {
      console.log(planet.name);
    }
    return axios.get(data.next);
  })
  .then(({ data }) => {
    console.log(data);
    for (let planet of data.results) {
      console.log(planet.name);
    }
  })
  .catch((err) => {
    console.log(err);
  });
