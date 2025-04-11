let minutes = 25;
let seconds = 0;
let interval;
let running = false;

function updateDisplay() {
  const timer = document.querySelector(".timer");
  let m = String(minutes).padStart(2, '0');
  let s = String(seconds).padStart(2, '0');
  timer.textContent = `${m}:${s}`;
}

function startTimer() {
  interval = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(interval);
        alert("Pomodoro done!");
        return;
      }
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }
    updateDisplay();
  }, 1000);
}

function toggleTimer() {
  const blob = document.querySelector(".blob");

  if (!running) {
    startTimer();
    document.querySelector("button").textContent = "Pause";
    blob.classList.add("active"); // 👈 animate faster
    running = true;
  } else {
    clearInterval(interval);
    document.querySelector("button").textContent = "Start";
    blob.classList.remove("active"); // 👈 go back to calm float
    running = false;
  }
}

updateDisplay();