document.querySelector('.clear-tasks').addEventListener('click', 
function(e) {
  console.log('Hello World')

  e.preventDefault();
})

document.querySelector('.clear-tasks').addEventListener('click', onClick); 
// addEventListener passes the event to onClick. onClick receives it using e.

function onClick(e) {
  console.log('Clicked');

  let val;

  val = e;

  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  e.target.innerText = 'Hello';

  // Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // Coords event to the window
  val = e.clientY;
  val = e.clientX;

  // Coords event to the element
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
clearBtn.addEventListener('click', runEvent);

// Double Click
clearBtn.addEventListener('dblclick', runEvent);

// Mouse Down
clearBtn.addEventListener('mousedown', runEvent);

// Mouse Up
clearBtn.addEventListener('mouseup', runEvent);

// Mouse Enter
card.addEventListener('mouseenter', runEvent);

// Mouse Leave
card.addEventListener('mouseleave', runEvent);

// Mouse Over
card.addEventListener('mouseover', runEvent);  // Fires again when you come back from child element

// Mouse Out
card.addEventListener('mouseout', runEvent); // Fires again when you hover over child element

// Mouse Move
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e) {
  console.log(`Event Type: ${e.type}`)

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
}