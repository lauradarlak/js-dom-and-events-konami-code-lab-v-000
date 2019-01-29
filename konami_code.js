const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

// Keep track of index outside of the event handler.


function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;
  const body = document.querySelector('body');
  body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which);
    console.log(key)
    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert("Hurray!");

        index = 0;
      }
    } else {
      index = 0;
    }
  });
}

init();
