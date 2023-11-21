function updateTime() {
    var currentTimeElement = document.getElementById("currentTime");
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // Add leading zero if needed
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var formattedTime = hours + ":" + minutes + ":" + seconds;
    currentTimeElement.innerHTML = "Current Time: " + formattedTime;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial call to display time immediately when the page loads
updateTime();


