// All logics goes here
const button = document.getElementById('btn');
const msg = document.getElementById('message');
const colors = ['#f44336', '#e91e63', '#9c27b0', '#3f51b5', '#009688', '#ff9800'];//Array of custom screen colors
let colorIndex = 0;
let escapes = 0;
button.addEventListener('mouseover', () => {
    //Calculate maximum available space on the screen and minus button dimensions.
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    //Generate random coordinates within safe boundaries.
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    //Apply new coordinates to the button.
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;

    //change the screen color
    document.body.style.backgroundColor = colors[colorIndex];

    //Move to the next color in screen
    colorIndex = (colorIndex + 1) % colors.length; 
    escapes++;
    msg.textContent = `Escapes: ${escapes}`;
});

// Success message (on click)
button.addEventListener('click', () => {
  alert('SUCCESSFULLY ! YOU WIN 🏆');
 msg.textContent = `Woohoo Congratulations🎉! You Caught Me after ${escapes} escapes.`;
  document.body.style.backgroundColor = '#4CAF50'; // Turn screen color green on success
  // //reset counter after winning
  // escapes = 0;
  // msg.textContent = `Escapes: ${escapes}`;
});