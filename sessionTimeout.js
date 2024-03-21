let timer;
let timeoutInSeconds = 60; // Timeout in seconds for testing purposes
const logoutUrl = 'index.html'; // URL to redirect to upon timeout
let timeoutTime; // Variable to store the timeout time

function resetTimer() {
    clearTimeout(timer);
    timeoutTime = new Date().getTime() + timeoutInSeconds * 1000; // Update timeoutTime
    timer = setTimeout(logout, timeoutInSeconds * 1000); // Convert seconds to milliseconds
}

function logout() {
    // Perform logout actions, such as clearing local storage, redirecting, etc.
    localStorage.clear();
    window.location.replace(logoutUrl);
    clearTimeout(timer); // Reset the timer
}

function updateTimerDisplay(remainingTime) {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    const timerElement = document.getElementById('timer');
    if (timerElement) {
        timerElement.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    } else {
        console.log('Timer element not found');
    }
}

// Reset timer on user interaction
document.addEventListener('mousemove', resetTimer);
document.addEventListener('keypress', resetTimer);

// Calculate initial time left
timeoutTime = new Date().getTime() + timeoutInSeconds * 1000;
const initialTimeLeft = Math.ceil((timeoutTime - new Date().getTime()) / 1000);

// Start timer
timer = setTimeout(logout, timeoutInSeconds * 1000); // Set initial timeout
updateTimerDisplay(initialTimeLeft); // Initial display of remaining time

// Update timer display every second
setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = Math.ceil((timeoutTime - now) / 1000); // Use timeoutTime instead of timer
    if (timeLeft >= 0) {
        updateTimerDisplay(timeLeft);
    } else {
        updateTimerDisplay(0); // Display 0 when timer has expired
    }
}, 1000);
