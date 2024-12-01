const turtle = document.getElementById('turtle');
const button = document.getElementById('fingerButton');
const message = document.getElementById('message');

let isMoving = false;
let position = 0;
let interval;

button.addEventListener('mousedown', () => {
    if (!isMoving) {
        isMoving = true;
        position = 0; // Reset position
        message.classList.add('hidden'); // Hide message
        moveTurtle();
    }
});

button.addEventListener('mouseup', () => {
    isMoving = false;
    clearInterval(interval);
    position = 0; // Reset position
    turtle.style.top = '0px'; // Reset turtle position
});

function moveTurtle() {
    interval = setInterval(() => {
        if (position < window.innerHeight - 150) { // Adjust for turtle height
            position += 2; // Move turtle up
            turtle.style.top = `${position}px`;
        } else {
            clearInterval(interval);
            message.classList.remove('hidden'); // Show message
            isMoving = false; // Stop moving
        }
    }, 100); // Adjust speed here
}
