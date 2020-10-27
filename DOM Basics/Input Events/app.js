const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear input
taskInput.value = '';

// Form Submit
form.addEventListener('submit', runEvent);

// Keydown
taskInput.addEventListener('keydown', runEvent)

// Keyup
taskInput.addEventListener('keyup', runEvent)

// Keypress
taskInput.addEventListener('keypress', runEvent)

// Focus
taskInput.addEventListener('focus', runEvent)

// Blur
taskInput.addEventListener('blur', runEvent)

// Cut
taskInput.addEventListener('cut', runEvent)

// Paste
taskInput.addEventListener('paste', runEvent)

// Input
taskInput.addEventListener('input', runEvent)

// Change
select.addEventListener('change', runEvent)

function runEvent(e) {
  console.log(`Event Type: ${e.type}`)

  // Get input value
  console.log(taskInput.value);

  // Get target's input value
  console.log(e.target.value);

  // Change heading
  heading.innerText = e.target.value;

  // e.preventDefault();
}
