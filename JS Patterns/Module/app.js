// Basic Structure

// (function() {
//   // Declare private vars and functions

//   return {
//     // Declare public vars and functions

//   }
// })();

// Standard Module Pattern
const UIController = (function() {
  let text = 'Hello World';

  const changeText = function() {
    const element = document.querySelector('h1');
    element.textContent = text;
  }

  return {
    callChangeText: function() {
      changeText();
      console.log(text);
    }
  }
})();

UIController.callChangeText();
// UIController.changeText(); // Doesn't work on private function

console.log(UIController.text); // Doesn't work on private vars

// Revealing Module Pattern
const itemCtrl = (function() {
  let data = [];

  function add(item) {
    data.push(item);
    console.log('Item Added');
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    })
  }

  return {
    add: add, // Makes these methods public
    get: get
  }
})();

itemCtrl.add({id: 1, name: 'John'});
console.log(itemCtrl.get(1));