document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getAPI);

// Get local text file
// function getText() {
//   fetch('test.txt')
//   .then(function(res) {
//     return res.text();
//   })
//   .then(function(data) {
//     console.log(data);
//     document.getElementById('output').innerHTML = data;
//   })
//   .catch(function(err) {
//     console.log(err);
//   });
// }

// // Get local json data
// function getJSON() {
//   fetch('posts.json')
//   .then(function(res) {
//     return res.json();
//   })
//   .then(function(data) {
//     console.log(data);
//     let output = '';
//     data.forEach(function(post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.getElementById('output').innerHTML = output;
//   })
//   .catch(function(err) {
//     console.log(err);
//   });
// }

// // Get from external API
// function getAPI() {
//   fetch('https://api.github.com/users')
//   .then(function(res) {
//     return res.json();
//   })
//   .then(function(data) {
//     console.log(data);
//     let output = '';
//     data.forEach(function(user) {
//       output += `<li>${user.login}</li>`;
//     });
//     document.getElementById('output').innerHTML = output;
//   })
//   .catch(function(err) {
//     console.log(err);
//   });
// }

// WITH ARROW FUNCTIONS

// Get local text file
function getText() {
  fetch('test.txt')
    // One promise for the reponse
    .then((res) => res.text())
    // One promise for the data
    .then((data) => {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch((err) => console.log(err));
}

// Get local json data
function getJSON() {
  fetch('posts.json')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let output = '';
      data.forEach(function(post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch((err) => console.log(err));
}

// Get from external API
function getAPI() {
  fetch('https://api.github.com/users')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let output = '';
      data.forEach(function(user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch((err) => console.log(err));
}
