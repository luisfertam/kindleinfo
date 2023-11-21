document.addEventListener("DOMContentLoaded", function() {
    // Function to update the current time
    function updateCurrentTime() {
        // Get the current time
        var currentTime = new Date();
        
        // Format the time as a string (you can customize the format as needed)
        var formattedTime = currentTime.toLocaleTimeString();

        // Update the content of the 'current-time' paragraph element
        document.getElementById("current-time").textContent = formattedTime;
    }

    // Call the updateCurrentTime function initially
    updateCurrentTime();

    // Use setInterval to update the time every second (1000 milliseconds)
    setInterval(updateCurrentTime, 1000);
});