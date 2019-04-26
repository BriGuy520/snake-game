const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Mutable State 
let state = initialState();

// Game loop update 
const step = t1 => t2 => {
  if(t2 - t1 > 100){
    state = next(state);
    draw();
    window.requestAnimationFrame(step(t2));
  } else {
    window.requestAnimationFrame(step(t1));
  }
}

// Key events 
window.addEventListener('keydown', e => {

});

// Main
draw();
window.requestAnimationFrame(step(0));