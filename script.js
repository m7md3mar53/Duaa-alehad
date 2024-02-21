var count;
var countElement = document.getElementById("count");

function incrementCount() {
    count++;
    countElement.textContent = count;
    localStorage.setItem("count", count);
    localStorage.setItem("lastUpdated", Date.now());
}

window.onload = function() {
    var lastUpdated = localStorage.getItem("lastUpdated");
    if (lastUpdated) {
        var lastUpdatedTime = new Date(parseInt(lastUpdated));
        var currentTime = new Date();
        // Check if a whole day has passed since the last update
        if (currentTime.getDate() !== lastUpdatedTime.getDate() || 
            currentTime.getMonth() !== lastUpdatedTime.getMonth() || 
            currentTime.getFullYear() !== lastUpdatedTime.getFullYear()) {
            count = 0;
            localStorage.setItem("count", count);
            countElement.textContent = count;
        } else {
            count = parseInt(localStorage.getItem("count")) || 0;
            countElement.textContent = count;
        }
    } else {
        count = 0;
        countElement.textContent = count;
    }
};
