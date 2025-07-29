let minutes = 3;
let seconds = 0;
let timerInterval;
let isRunning = false;

const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const startButton = document.querySelector('.start-button');
const stopButton = document.querySelector('.stop-button');

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);

function startTimer() {
    isRunning = true;
    startButton.disabled = true;
    stopButton.disabled = false;
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    isRunning = false;
    startButton.disabled = false;
    stopButton.disabled = true;
    clearInterval(timerInterval);
}