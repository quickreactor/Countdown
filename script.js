// Set the target date in milliseconds
const targetDate = new Date('2024-02-06T00:00:00Z').getTime();

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 10);

function updateCountdown() {
  // Get the current date and time in milliseconds
  const currentDate = new Date().getTime();

  // Calculate the time difference between the current date and the target date
  const timeDifference = targetDate - currentDate;

  // Calculate days, hours, minutes, and seconds
  const days = String(Math.floor(timeDifference / (1000 * 60 * 60 * 24))).padStart(2, '0');
  const hours = String(Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
  const minutes = String(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
  const seconds = String(Math.floor((timeDifference % (1000 * 60)) / 1000)).padStart(2, '0');
  const milliseconds = String(Math.floor((timeDifference % 1000) / 10)).padStart(2, '0');


  // Display the countdown in the specified element
  document.getElementById('countdown').innerHTML = `${days}:${hours}:${minutes}:${seconds}:${milliseconds}`;

  // Check if the target date has been reached
  if (timeDifference <= 0) {
    clearInterval(countdownInterval);
    document.getElementById('countdown').innerHTML = 'Countdown expired!';
  }
}