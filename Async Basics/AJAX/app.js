document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // readyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready

  // Optional - used for spinners/loaders
  xhr.onprogress = function() {
    console.log('READYSTATE', xhr.readyState)
  }

  // Optional - used for errors
  xhr.onerror = function () {
    console.log('Request error...')
  }

  // Open
  xhr.open('GET', 'data.txt', true);

  xhr.onload = function() {
    if (this.status === 200) {
      console.log(this.responseText)

      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
    }
  }
  xhr.send();
}

