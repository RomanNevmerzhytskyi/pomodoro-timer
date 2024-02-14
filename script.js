const first_btn = document.getElementById('pom1');
const second_btn = document.getElementById('pom2');
const third_btn = document.getElementById('pom3');

const timer1 = document.querySelector('.pomodoro-timer');
const timer2 = document.querySelector('.pomodoro-timer2');
const timer3 = document.querySelector('.pomodoro-timer3');

const start_btn = document.getElementById('start');
const reset_btn = document.getElementById('reset');

let initialTimes = {}; // Object to store initial times for each timer
let isTimerRunning = false; // Flag to track if the timer is running

// Store initial times for each timer
initialTimes.timer1 = timer1.innerText;
initialTimes.timer2 = timer2.innerText;
initialTimes.timer3 = timer3.innerText;

let time = '';

const ChangeTime1 = () => {
    resetTimer(); // Reset timer to initial time
    clearInterval(interval); // Clear any existing interval
    timer1.style.display = 'block';
    timer2.style.display = 'none';
    timer3.style.display = 'none';

    first_btn.classList.add('pomodoro-button-clicked');
    second_btn.classList.remove('pomodoro-button-clicked');
    third_btn.classList.remove('pomodoro-button-clicked');

    time = initialTimes.timer1; // Set time to initial time
    console.log(time);
    updateTimer(); 
}

const ChangeTime2 = () => {
    resetTimer(); // Reset timer to initial time
    clearInterval(interval); // Clear any existing interval
    timer1.style.display = 'none';
    timer3.style.display = 'none';
    timer2.style.display = 'block';

    first_btn.classList.remove('pomodoro-button-clicked');
    second_btn.classList.add('pomodoro-button-clicked');
    third_btn.classList.remove('pomodoro-button-clicked');

    time = initialTimes.timer2; // Set time to initial time
    console.log(time);
    updateTimer(); 
}

const ChangeTime3 = () => {
    resetTimer(); // Reset timer to initial time
    clearInterval(interval); // Clear any existing interval
    timer1.style.display = 'none';
    timer2.style.display = 'none';
    timer3.style.display = 'block';

    first_btn.classList.remove('pomodoro-button-clicked');
    second_btn.classList.remove('pomodoro-button-clicked');
    third_btn.classList.add('pomodoro-button-clicked');

    time = initialTimes.timer3; // Set time to initial time
    console.log(time);
    updateTimer(); 
}

const resetTimer = () => {
    clearInterval(interval);
    if (timer1.style.display === 'block') {
        timer1.innerHTML = initialTimes.timer1; // Reset timer to initial time
    } else if (timer2.style.display === 'block') {
        timer2.innerHTML = initialTimes.timer2; // Reset timer to initial time
    } else if (timer3.style.display === 'block') {
        timer3.innerHTML = initialTimes.timer3; // Reset timer to initial time
    }
    totalseconds = 0;
    start_btn.textContent = 'Start'; // Reset start button text
    isTimerRunning = false; // Reset the timer running flag
}

const updateTimer = () => {
    const [min, sec] = time.split(':');
    const minutes = parseInt(min);
    const seconds = parseInt(sec);
    console.log(minutes);
    console.log(seconds);

    totalseconds = (minutes * 60) + seconds;
    console.log(totalseconds);
}

let interval;
let totalseconds;

const startClock = () => {
    interval = setInterval(() => {
        totalseconds--;
        if (totalseconds >= 0) {
            const minutes = Math.floor(totalseconds / 60);
            const seconds = totalseconds % 60;

            if (timer1.style.display === 'block') {
                timer1.innerHTML = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            } else if (timer2.style.display === 'block') {
                timer2.innerHTML = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            } else if (timer3.style.display === 'block') {
                timer3.innerHTML = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            }
        } else {
            clearInterval(interval);
            alert('Time is out!!!')
        }
    }, 1000);
}

first_btn.addEventListener('click', ChangeTime1);
second_btn.addEventListener('click', ChangeTime2);
third_btn.addEventListener('click', ChangeTime3);

start_btn.addEventListener('click', () => {
    if (!isTimerRunning) {
        start_btn.textContent = 'Pause';
        isTimerRunning = true;
        startClock();
    } else {
        start_btn.textContent = 'Start';
        clearInterval(interval);
        isTimerRunning = false;
    }
});

reset_btn.addEventListener('click', resetTimer);
