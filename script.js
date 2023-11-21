document.addEventListener('DOMContentLoaded', function () {
    updateTime();
    // Update the time every second
    setInterval(updateTime, 1000);
});

function updateTime() {
    // Get the current time in GMT-5 timezone
    const gmtMinus5 = new Date().toLocaleString('en-US', { timeZone: 'America/Bogota' });

    // Display the time in the specified container
    const timeContainer = document.getElementById('time-container');
    timeContainer.textContent = 'Current Time (GMT-5): ' + gmtMinus5;
}
