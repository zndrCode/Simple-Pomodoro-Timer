const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');

let minutes = 25;
let seconds = 0;
let timerInterval;
let isRunning = false;

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);

function startTimer() {
    console.log('Start timer button clicked!');
    isRunning = true;
    startButton.disabled = true;
    stopButton.disabled = false;
    timerInterval = setInterval(updateTimer, 1000);
    console.log('Timer interval set to:', timerInterval);
}

function stopTimer() {
    isRunning = false;
    startButton.disabled = false;
    stopButton.disabled = true;
    clearInterval(timerInterval);
}

function updateTimer() {
    if (seconds === 0) {
        minutes--;
        seconds = 60;
    }
    seconds--;
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
    if (minutes === 0 && seconds === 0) {
        stopTimer();
        alert('Time\'s up!');
    }
}