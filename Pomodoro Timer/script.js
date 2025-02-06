// Grabbing HTML elements so I can register clicks and change the timer on screen.
const startElement = document.getElementById("start");
const stopElement = document.getElementById("stop");
const resetElement = document.getElementById("reset");
const timeElement = document.getElementById("timer");

// Defining Variables, such as the timer length and the interval.
let timerLength = 5;
let interval;

// This function is called when the start button is clicked.
function startTimer() {
  startElement.setAttribute("disabled", true);
  // This sets the interval.
  interval = setInterval(() => {
    // If the time goes to 0, the interval is stopped
    if (timerLength <= 0) {
      clearInterval(interval);
    }
    if (timerLength < 0) {
      timerLength = 0;
    }
    // Calculates the values for the timer
    minutes = Math.floor(timerLength / 60);
    seconds = timerLength % 60;
    // This formats the timer into something that can be displayed
    formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
    // This changes the inner HTML of the element with the id of timer to the formatted time
    timeElement.innerHTML = formattedTime;
    // Decrements the timerLength by one second
    timerLength--;
    // The 1000 is how many milliseconds before it reruns the arrow function above
  }, 1000);
}

// This stops the interval (pausing the timer)
function stopTimer() {
  clearInterval(interval);
  if (timerLength != 0) {
    startElement.removeAttribute("disabled");
  }
}

// This resets the timer back to 1500 seconds and displays the original inner HTML
function resetTimer() {
  clearInterval(interval);
  startElement.removeAttribute("disabled");
  timerLength = 1500;
  timeElement.innerHTML = "25:00";
}

// This detects if any of the buttons are clicked and calls the necessary function
startElement.addEventListener("click", startTimer);
stopElement.addEventListener("click", stopTimer);
resetElement.addEventListener("click", resetTimer);
