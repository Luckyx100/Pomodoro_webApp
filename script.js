// Timer variables
let minutes = 25;
let seconds = 0;
let isRunning = false;
let timerInterval;

// DOM elements
const timerDisplay = document.getElementById('timer-display');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');

// Function to start the timer
function startTimer() {
    if (!isRunning) {
      isRunning = true;
      minutes = parseInt(document.getElementById('minutes-input').value);
      seconds = parseInt(document.getElementById('seconds-input').value);
      timerInterval = setInterval(updateTimer, 1000);
    }
  }

// Function to update the timer display
function updateTimer() {
  if (seconds > 0) {
    seconds--;
  } else if (minutes > 0) {
    minutes--;
    seconds = 59;
  } else {
    clearInterval(timerInterval);
    isRunning = false;
    alert('Time is up!');
  }

  timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Function to reset the timer
function resetTimer() {
    clearInterval(timerInterval);
    minutes = parseInt(document.getElementById('minutes-input').value);
    seconds = parseInt(document.getElementById('seconds-input').value);
    isRunning = false;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

// Event listeners
startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);