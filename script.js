const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');
const timerElement = document.querySelector('.timer');

let minutes = 5;
let seconds = 0;
let timerInterval;
let isRunning = false;

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    startButton.disabled = true;
    stopButton.disabled = false;
    timerElement.classList.add('active');
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    isRunning = false;
    startButton.disabled = false;
    stopButton.disabled = true;
    timerElement.classList.remove('active');
    clearInterval(timerInterval);
}

function resetTimer() {
    stopTimer();
    minutes = 5;
    seconds = 0;
    minutesElement.textContent = '05';
    secondsElement.textContent = '00';
    timerElement.classList.remove('active');
}

function updateTimer() {
    if (seconds === 0) {
        if (minutes === 0) {
            stopTimer();
            alert("Time's up!");
            return;
        }
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }

    minutesElement.style.transform = 'scale(1.1)';
    secondsElement.style.transform = 'scale(1.1)';
    setTimeout(() => {
        minutesElement.style.transform = 'scale(1)';
        secondsElement.style.transform = 'scale(1)';
    }, 300);

    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
}
